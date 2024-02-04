import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import request from '../util/request';
import { generateRandomId } from '../util/helper-functions';

const messagesAdapter = createEntityAdapter({
  selectId: message => message.id,
  initialState: {},
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
    const messages = selectMessages(getState());
    const temperature = selectTemperature(getState());
    const defaultQuery = selectDefaultQuery(getState());

    let query = {
      role: 'user',
      content: defaultQuery ? `${text} and ${defaultQuery}` : text,
    };

    const messagesWithoutIds = messages.map(m => ({
      role: m?.role,
      content: m?.content,
    }));

    dispatch(addUserQuery({ id: generateRandomId(), ...query }));

    const response = await request({
      url: '/chat/completions',
      method: 'POST',
      data: {
        temperature,
        model: 'gpt-3.5-turbo',
        max_tokens: 20,
        messages: [...messagesWithoutIds, query],
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
    const temperature = selectTemperature(getState());
    const defaultQuery = selectDefaultQuery(getState());

    const query = { id: generateRandomId(), role: 'user', content: file };

    dispatch(addUserQuery(query));

    const form = new FormData();
    form.append('file', file);
    form.append('temperature', temperature);
    form.append('response_format', 'text');
    form.append('model', 'gpt-3.5-turbo');
    form.append('prompt', defaultQuery);
    form.append('max_tokens', 20);

    const response = await request({
      url: '/audio/transcriptions',
      method: 'POST',
      data: form,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).catch(e => console.log('Err', e));

    const answer = response.choices && {
      id: generateRandomId(),
      ...response.choices[0]?.message,
    };

    return answer
  }
);

// Slice
const messagesSlice = createSlice({
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
      messagesAdapter.addOne(state, action.payload);
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
  messagesSlice.actions;

// Reducer
export default messagesSlice.reducer;

// Selectors
export const selectMessages = messagesAdapter.getSelectors(
  state => state.messages
).selectAll;

export const selectTemperature = state => state.messages.temperature;
export const selectDefaultQuery = state => state.messages.defaultQuery;
export const selectError = state => state.messages.error;
export const selectIsLoading = state => state.messages.isLoading;
