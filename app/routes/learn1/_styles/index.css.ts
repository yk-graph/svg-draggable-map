import { style } from '@vanilla-extract/css';

export const root = style({
  height: '100%',
  width: '100vw',
  padding: '0 40px',
  margin: '0 auto'
})

export const section = style({
  height: '800px',
  width: '100%',
})

export const info = style({
  height: 'auto',
  width: 'fit-content',
  background: 'darkkhaki',
  color: 'white',
  padding: '4px',
  marginBottom: '16px',
  fontSize: '10px',
})

export const mapContainer = style({
  width: '400px',
  height: '400px',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'move',
})

export const svgStyle = style({
  position: 'absolute',
});
