import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import request from '../util/request';
import { generateRandomId } from '../util/helper-functions';

const messagesAdapter = createEntityAdapter({
  selectId: message => message.id,
});

// Initial state
const initialState = messagesAdapter.getInitialState({
  error: null,
  isLoading: false,
  temperature: 0.5,
  defaultQuery: '',
});

// Async actions

export const sendMessage = createAsyncThunk(
  'sendMessage',
  async (text, { getState, dispatch }) => {
    const { messages, temperature, defaultQuery } = getState();

    const query = {
      id: generateRandomId(),
      role: 'user',
      content: `${text} and ${defaultQuery}`,
    };

    dispatch(addUserQuery(query));

    const response = await request({
      url: '/completions',
      method: 'POST',
      data: {
        temperature,
        model: 'gpt-3.5-turbo',
        messages: [...messages, query],
      },
    }).catch(e => console.log('Err', e));

    const answer = response.choices && {
      id: generateRandomId(),
      ...response.choices[0]?.message,
    };

    return answer;
  }
);

export const sendAudioMessage = createAsyncThunk(
  'sendAudioMessage',
  async (file, { getState, dispatch }) => {
    const { temperature, defaultQuery } = getState();

    dispatch(
      addUserQuery({ id: generateRandomId(), role: 'user', content: 'audio' })
    );

    const form = new FormData();

    form.append('file', file);
    form.append('temperature', temperature);
    form.append('response_format', 'text');
    form.append('model', 'gpt-3.5-turbo');
    form.append('prompt', defaultQuery);

    const response = await request({
      url: '/audio/transcriptions',
      method: 'POST',
      data: form,
    }).catch(e => console.log('Err', e));

    const answer = response.choices && {
      id: generateRandomId(),
      ...response.choices[0]?.message,
    };

    return answer;
  }
);

// Slice
const chatSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setTemperature: (state, action) => {
      state.temperature = action.payload;
    },
    setDefaultQuery: (state, action) => {
      state.defaultQuery = action.payload;
    },
    addUserQuery: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
  },
  extraReducers(builder) {
    builder
      // sendMessage
      .addCase(sendMessage.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        messagesAdapter.addOne(state, action.payload);
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      // sendMessage
      .addCase(sendAudioMessage.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(sendAudioMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        messagesAdapter.addOne(state, action.payload);
      })
      .addCase(sendAudioMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

// Actions
export const { setDefaultQuery, setTemperature, addUserQuery } =
  chatSlice.actions;

// Reducer
export default chatSlice.reducer;

// Selectors
export const selectMessages = messagesAdapter.getSelectors(
  state => state.messages
).selectAll;

export const selectError = state => state.error;

export const selectIsLoading = state => state.isLoading;
