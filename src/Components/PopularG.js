import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import cx from 'clsx';
import Color from 'color';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { Row, Item } from '@mui-treasury/components/flex';
import '../Components/Styles/PopularG.css'


const useGridStyles = makeStyles(({ breakpoints }) => ({
 root: {
   overflow: 'auto',
   [breakpoints.only('xs')]: {
     '& > *:not(:first-child)': {
       paddingLeft: 0,
     },
   },
   [breakpoints.up('sm')]: {
     justifyContent: 'center',
   },
 },
}));

const sizeCard = makeStyles((theme) => ({
 root: {
   flex: 0.7,
   flexGrow: 1,
   overflow: 'auto',
 },
 paper: {
   // padding: theme.spacing(10),
   textAlign: 'center',
   // color: theme.palette.text.secondary,
 },
}));

const useStyles = makeStyles(({ palette }) => ({
 color: ({ color }:{ color: string }) => ({
   '&:before': {
     backgroundColor: Color(color)
       .darken(0.3)
       .desaturate(0.2)
       .toString(),
   },
 }),
 root: {
   position: 'relative',
   borderRadius: '1rem',
   minWidth: 210,
   '&:before': {
     transition: '0.2s',
     position: 'absolute',
     width: '100%',
     height: '100%',
     content: '""',
     display: 'block',
     borderRadius: '0.4rem',
     zIndex: 0,
     bottom: 0,
   },
   '&:hover': {
     '&:before': {
       bottom: -6,
     },
     '& $logo': {
       transform: 'scale(1.1)',
       boxShadow: '0 6px 20px 0 rgba(0,0,0,0.38)',
     },
   },
 },
 cover: {
   borderRadius: '0.4rem',
 },
 content: ({ color }: { color: string }) => ({
   position: 'relative',
   zIndex: 1,
   borderRadius: '0.4rem',
   boxShadow: `0 6px 16px 0 ${Color(color).fade(0.5)}`,
   '&:before': {
     content: '""',
     display: 'block',
     position: 'absolute',
     left: 0,
     top: 0,
     zIndex: 0,
     width: '100%',
     height: '100%',
     opacity: 0.9,
     // clipPath:
     //   'polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)',
     borderRadius: '0.4rem',
     background: `linear-gradient(to top, ${color}, ${Color(color)
       .rotate(24)
       .lighten(0.12)})`,
   },
 }),
 
 title: {
   fontFamily: 'Fjalla One',
   fontSize: '1.2rem',
   color: '#fff',
   margin: 0,
 },
 logo: {
   transition: '0.3s',
   width: 100,
   height: 100,
   boxShadow: '0 4px 12px 0 rgba(0,0,0,0.24)',
   borderRadius: '0.4rem',
 },
 team: {
   fontFamily: 'Sen',
   fontSize: '0.75rem',
   color: palette.text.hint,
 },
 date: {
   fontFamily: 'Sen',
   color: '#fff',
   backgroundColor: palette.text.hint,
   opacity: 0.72,
   fontSize: '0.75rem',
   padding: '0 0.5rem',
   borderRadius: 12,
 },
}));

const CustomCard = ({ styles, cover, logo, title, brand, date }) => {
 const mediaStyles = useCoverCardMediaStyles();
 return (
   <Box className={cx(styles.root, styles.color)} pt={20}>
     <CardMedia image={cover} className={styles.cover} classes={mediaStyles} />
     <Box className={styles.content} p={1}>
       <Box position={'relative'} zIndex={3}>
         <Row p={0} gap={1}>
           <Item>
             <Avatar className={styles.logo} src={logo} />
           </Item>
           <Item position={'bottom'}>
             <h2 className={styles.title}>{title}</h2>
           </Item>
         </Row>
         <Row mt={4} alignItems={'center'}>
           <Item>
             <div className={styles.team}>{brand}</div>
           </Item>
           <Item position={'right'}>
             <div className={styles.date}>{date}</div>
           </Item>
         </Row>
       </Box>
     </Box>
   </Box>
 );
};

const PopularG = React.memo(function HighlightCard() {
 const styles1 = useStyles({ color: '#fc7944' });
 const styles2 = useStyles({ color: '#5357ce' });
 const styles3 = useStyles({ color: '#2a095f' });
 const styles4 = useStyles({ color: '#52796f' });
 const styles5 = useStyles({ color: '#ef233c' });
 const styles6 = useStyles({ color: '#d08c60' });
 const gridStyles = useGridStyles();
 const classes = sizeCard();
 return (
  
  <div className={`${classes.root} ${"Container__Games"}`} 
        style={{ padding: 16 }}
        classes={gridStyles}
        wrap={'nowrap'}
        container
        spacing={4}>
          <div className='Container__title'>
            <h2>Popular Games</h2>
          </div>
   <NoSsr>
        <GoogleFontLoader
          fonts={[{ font: 'Fjalla One' }, { font: 'Sen', weights: [500] }]}
        />
      </NoSsr>
      <br/>
    <Grid container spacing={3}>
    <Grid item xs={12} sm={4}>
          <CustomCard className={classes.paper}
            styles={styles3}
            brand={'Fornite'}
            date={'02.04.2020'}
            cover={
              'https://i.ytimg.com/vi/-uWtACM49Pc/maxresdefault.jpg'
            }
            logo={'https://www.jing.fm/clipimg/full/3-31188_logo-fortnite-battle-royale-sin-letras-png-fortnite.png'}
            title={
              <>
                Fornite
                <br />A Great Alternative
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomCard
            styles={styles2}
            brand={'Rocket League'}
            date={'02.04.2020'}
            cover={
              'https://www.nintendo.com//content/dam/noa/en_US/games/switch/r/rocket-league-switch/rocket-league-switch-hero.jpg'
            }
            logo={
              'https://cdn.discordapp.com/attachments/457330524047015969/763769753222381579/Logo.webp'
            }
            title={
              <>
                Rocket League
                <br />A Great Alternative
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomCard
            styles={styles4}
            brand={'call of duty warzone'}
            date={'02.04.2020'}
            cover={
              'https://cdn.mos.cms.futurecdn.net/f94W77ceivudNJpZbziJYg.jpg'
            }
            logo={
              'https://image-cdn.essentiallysports.com/wp-content/uploads/20200528234718/shared-logo-1600x837.jpg'
            }
            title={
              <>
                Call of Duty
                <br />A Great Alternative
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomCard className={classes.paper}
            styles={styles5}
            brand={'AMONG US'}
            date={'02.04.2020'}
            cover={
              'https://wallpaperaccess.com/full/3901875.jpg'
            }
            logo={'https://i.pinimg.com/originals/38/bb/d3/38bbd3f3fec0db7e66a5892815798fcb.png'}
            title={
              <>
                AMONG US
                <br />A Great Alternative
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomCard
            styles={styles2}
            brand={'League of Legends Official'}
            date={'02.04.2020'}
            cover={
              'https://www.pcclean.io/wp-content/uploads/2019/04/559308.jpg'
            }
            logo={
              'https://vignette.wikia.nocookie.net/youtube/images/7/77/LeagueOfLegends.jpg/revision/latest?cb=20180718040905'
            }
            title={
              <>
                Astronomy Binoculars
                <br />A Great Alternative
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomCard className={classes.paper}
            styles={styles1}
            brand={'Overwatch Official'}
            date={'02.04.2020'}
            cover={
              'https://cdn.vox-cdn.com/thumbor/C6_-SDnnoFdS19XRH4XvAYN1BT8=/148x0:1768x1080/1400x1400/filters:focal(148x0:1768x1080):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49641465/tracer_overwatch.0.0.jpg'
            }
            logo={'https://d3fa68hw0m2vcc.cloudfront.net/bf4/156511609.jpeg'}
            title={
              <>
                Overwatch
                <br />A Great Alternative
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomCard className={classes.paper}
            styles={styles6}
            brand={'Minecraft'}
            date={'02.04.2020'}
            cover={
              'https://steam.cryotank.net/wp-content/gallery/minecraft/Minecraft-04-HD.png'
            }
            logo={'https://cdn.hipwallpaper.com/i/55/54/tH8sRJ.jpg'}
            title={
              <>
                Minecraft
                <br />A Great Alternative
              </>
            }
          />
        </Grid>
      </Grid>
      
  </div>
);
});


export default PopularG
