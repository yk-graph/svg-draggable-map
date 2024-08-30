import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100vw',
  height: '100vh',
  backgroundColor: '#f0f0f0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const mapContainer = style({
  width: '300px',
  height: '300px',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'grab',
  border: '1px solid black',
  outline: 'none',
});

export const svg = style({
  position: 'absolute',
  transition: 'transform 0.3s ease-out',
});

export const zoomControls = style({
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  display: 'flex',
  gap: '5px',
});

export const zoomButton = style({
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '20px',
  ':hover': {
    backgroundColor: '#f0f0f0',
  },
});