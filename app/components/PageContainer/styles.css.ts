import { style } from "@vanilla-extract/css";

export const root = style({
  minHeight: '100vh',
  height: 'fit-content',
  minWidth: '100vw',
  width: 'fit-content',
  background: '#F6F6F6',
});

export const header = style({
  height: '56px',
  width: '100%',
  borderBottom: 'solid 1px #B0B0B0'
});

export const headerInner = style({
  height: '100%',
  width: '100%',
  maxWidth: '1360px',
  margin: 'auto',
  padding: '0 40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const main = style({
  height: '100%',
  width: '100%',
  maxWidth: '1360px',
  margin: 'auto',
  padding: '0 40px',
});