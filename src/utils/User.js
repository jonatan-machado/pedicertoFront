import React from 'react';

export const currentUserId = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const userId = userData.id;

  return userId;
};

export const currentUser = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  return userData;
};

export const userToken = () => {
  const token = JSON.parse(localStorage.getItem('userToken'));

  return token;
};
