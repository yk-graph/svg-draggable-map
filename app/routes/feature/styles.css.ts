import { style } from '@vanilla-extract/css';

export const root = style({
  width: '100%',
  containerType: 'inline-size',
});

export const inner = style({
  width: '100%',
  display: 'flex',
  '@container': {
    '(width < 688px)': {
      flexDirection: 'column'
    },
  },
});

export const mapSection = style({
  flex: 1,
  '@container': {
    '(width < 688px)': {
      width: '100%',
    },
  },
});

export const mapHeader = style({
  display: 'none',
  width: '100%',
  padding: '16px 24px',
  backgroundColor: 'dimgray',
  '@container': {
    '(width < 688px)': {
      display: 'block',
    },
  },
})

export const mapContainer = style({
  height: '480px',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: 'lightcyan',
});

export const mapSeatStatus = style({
  width: '100%',
  padding: '16px 24px',
  backgroundColor: 'lightgoldenrodyellow',
});

export const mapInfomation = style({
  width: '100%',
  padding: '16px 24px',
  backgroundColor: 'lightslategray',
});




export const reservationSection = style({
  maxWidth: '420px',
  width: '42.5%',
  display: 'flex',
  flexDirection: 'column',
  '@container': {
    '(width < 688px)': {
      maxWidth: 'initial',
      width: '100%',
    },
  },
});

export const reservationHeader = style({
  display: 'none',
  width: '100%',
  padding: '16px 24px',
  backgroundColor: 'dimgray',
  '@container': {
    '(width >= 688px)': {
      display: 'block',
    },
  },
})

export const reservationBody = style({
  width: '100%',
  padding: '16px 24px',
  backgroundColor: 'darkkhaki',
})

export const reservationAction = style({
  width: '100%',
  padding: '16px 24px',
  marginTop: 'auto',
  background: 'lightseagreen',
})
