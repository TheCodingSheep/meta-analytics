import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FloorPrice from '../../Graph/FloorPrice';
import AvgSale from '../../Graph/AvgSale';
import MedianPrice from '../../Graph/MedianPrice';
import MarketPrice from '../../Graph/MarketPrice';
import Volume from '../../Graph/Volume';
import Sales from '../../Graph/Sales';
import UniqueBuyer from '../../Graph/UniqueBuyer';
import UniqueSeller from '../../Graph/UniqueSeller';
import AvgConcurrentPlayers from '../../Graph/AvgConcurrentPlayers';
import ActiveTraders from '../../Graph/ActiveTraders';
import './Grid2.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box className='box' sx={{flexGrow: 1, width: '100%' , height: '100%',}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 1, md: 12 }}>
        <Grid item xs={6}>
          <Item><div>Floor Price</div><FloorPrice/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><div>Avg sale price</div><AvgSale/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><div>Median price(per sq/m²)</div><MedianPrice/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><div>Market price</div><MarketPrice/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><div>Volume</div><Volume/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><div>Sales</div><Sales/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><div>Unique buyer</div><UniqueBuyer/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><div>Unique seller</div><UniqueSeller/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><div>Avg concurrent players </div><AvgConcurrentPlayers/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><div>Active traders</div><ActiveTraders/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
