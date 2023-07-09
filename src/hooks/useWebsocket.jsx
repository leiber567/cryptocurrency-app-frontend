import { useEffect, useRef } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

export const useWebSocket = (url, onMessageReceived) => {
  const clientRef = useRef(null);

  const connect = () => {
    if (!clientRef.current) {
      const client = new W3CWebSocket(url);
      clientRef.current = client;

      client.onopen = () => {
        console.log('Socket open');
      };

      client.onmessage = (message) => {
        onMessageReceived(message.data);
      };

      client.onclose = () => {
        console.log('Socket close');
      };

      client.onerror = (error) => {
        console.error('Error:', error);
      };
    }
  }
  const disconnect = () => {
    if (clientRef.current) {
      clientRef.current.close();
      clientRef.current = null;
    }
  }
  return {
    connect,
    disconnect
  };
};
