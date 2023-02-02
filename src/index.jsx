import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './app.jsx'

const root = createRoot(document.getElementById('root'));
root.render(<App />);
