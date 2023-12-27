import React from 'react';
import Header from './Header'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css'; 


function Home() {

  const bull = <span className="bullet">•</span>;

  return    <div >
       <Header />
       <div id="hero" class="d-flex flex-column pt-4 px-4 lg-px-8 overflow-hidden">
     


<section class="home-section">
  <div class="container">
    <div class="row">
{/*     
      <div class="col-md-10">
        <h2>EasyMT</h2>
        <p>
          Vivre une experience unique avec la plus facile platforme 
        </p>
        <p>de transfert d'argent international</p>
     
      </div> */}
      <br/>
      <br/>
    </div>
  </div>
</section>
       </div>
      {/* <section className='hero'>
      <div className='headline animationUp'>Bienvenue au transfert national bank.</div>
      <div className='headline1'>Comment vous voulez effectuer votre transaction ?</div>
      <div className='single-animation'>
      <div className='buttons'><a href="/form1" className="btn1 cta-btn">Par Espèce</a><a href="/form2"  className="btn2 cta-btn">Par Débit de Compte</a></div>
          </div>
      </section> */}
       <br/>
       <br/>
       <h1>Comment vous voulez effectuer votre transaction ?</h1>
       <br/>
      <div className="cards-container">
       
      <Card className="root">  {/* Use class names from the CSS file */}
      <CardContent>
        <Typography className="title" color="rgb(46, 14, 88)" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2" color="rgb(46, 14, 88)">
        Par Espèce
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="big" href='/form1'>Learn More</Button>
      </CardActions>
    </Card>
   
      <Card className="root">  {/* Use class names from the CSS file */}
      <CardContent>
        <Typography className="title" color="rgb(46, 14, 88)" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2" color="rgb(46, 14, 88)">
        Par Espèce
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="big" href='/form1'>Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <div class="w3-container w3-padding-32" id="about">
    <h1 class="w3-border-bottom w3-border-light-grey w3-padding-16">About </h1>
    <p>Carpooling (also car-sharing, ride-sharing and lift-sharing) is the sharing of car journeys so that more than one person travels in a car, and prevents the need for others to have to drive to a location themselves.
By having more people using one vehicle, carpooling reduces each person's travel costs such as: fuel costs, tolls, and the stress of driving. Carpooling is also a more environmentally friendly and sustainable way to travel as sharing journeys reduces air pollution, carbon emissions, traffic congestion on the roads, and the need for parking spaces. Authorities often encourage carpooling, especially during periods of high pollution or high fuel prices. Car sharing is a good way to use up the full seating capacity of a car, which would otherwise remain unused if it were just the driver using the car.
    </p>
  </div>
  </div>;
}

export default Home;
