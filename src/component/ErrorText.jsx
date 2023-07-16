import React, {useState, useEffect, useRef} from 'react';
import {Text, StyleSheet, Animated} from 'react-native';

const ErrorToast = ({message}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsSnackbarVisible(true);

      const timeout = setTimeout(() => {
        setIsSnackbarVisible(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [message]);

  useEffect(() => {
    if (isSnackbarVisible) {
      setIsVisible(true);

      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isSnackbarVisible]);

  if (!isSnackbarVisible) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, {opacity: isVisible ? 1 : 0}]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: '#ff5252',
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ErrorToast;
