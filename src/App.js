import React, { Component } from 'react';
import logo from './logo.svg';
import ReactPlayer from 'react-player';
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';


import BBC from './images/BBC.png';
import Beeline from './images/Beeline.png';
import Intel from './images/Intel.png';
import Microsoft from './images/Microsoft.png';
import Okko from './images/Okko.png';
import Oncue from './images/Oncue.png';
import RedBull from './images/RedBull.png';
import Samsung from './images/Samsung.png';
import Skype from './images/Skype.png';
import Verizon from './images/Verizon.png';
import Vevo from './images/Vevo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [
        {
          name:'work',
          active: true
        },
        {
          name:'project',
          active: true
        },
        {
          name:'writing',
          active: true
        },
        {
          name:'education',
          active: true
        }
      ],
      content: [
        {
          type:'work',
          title:'Snapchat',
          subTitle:'Designer',
          date:'Oct 2017 - Current',
          url: 'https://www.snap.com/en-US/',
          description: "Building great experiences for publishers and internal teams."
        },
        {
          type:'work',
          title:'Possible',
          subTitle:'Senior UX Designer',
          date:'Jan - Oct 2017',
          url: 'https://www.youtube.com/watch?v=YYucMt0vrXg',
          description: 'Design lead on Frame Styler, an in-store AR app for Specsavers staff.'
        },
        {
          type:'project',
          typeAt: 'side',
          title:`Closer to midnight`,
          subTitle:'Creator',
          date: 'Jan 2017',
          url: 'http://closertomidnight.world',
          description: `A dramatic presentation of new risks facing the world.`
        },
        {
          type:'writing',
          title:'New Narratives in Virtual Reality',
          subTitle:'New approaches and design considerations for virtual reality',
          date:'Nov 2016',
          url: 'https://medium.com/w12studios/new-narratives-in-virtual-reality-4460f0314980',
          description: `Thoughts on how to bring some of the approaches of traditional video narratives and production to VR.`
        },
        {
          type:'writing',
          title:'Prototyping Process',
          subTitle:'When it can help, what tools we use and how to enable better design',
          date:'Feb 2016',
          url: 'https://medium.com/w12studios/prototyping-process-when-it-can-help-what-tools-to-use-and-how-to-enable-better-design-6bc3a64f8b8d',
          description: `Learnings and applications of high-fidelity prototypes to product design.`
        },
        {
          type:'project',
          typeAt: 'W12 Studios',
          title:'Vevo Apple TV',
          subTitle:'Interaction and motion design',
          date:'Dec 2015',
          url: 'https://medium.com/w12studios/vevo-on-apple-tv-24bacbcd8ff7',
          description: `Design for Vevo's updated Apple TV app. Centered around the idea of creating your own interactive MTV. Use of Siri Remote to offer contextual control at any point during watching.`
        },
        {
          type:'writing',
          title:'Five Lessons from Google SPAN 2015',
          subTitle:'Featured on Google Design',
          date:'Nov 2015',
          url: 'https://medium.com/google-design/5-lessons-from-google-span-conference-2015-217e957b3a69',
          description: `Summary and highlights from Google's invitational design conference.`
        },
        {
          type:'work',
          title:'W12 Studios',
          subTitle:'Senior Product Designer',
          date:'Aug 2015 - Jan 2017',
          thumbs: 'w12',
          url: 'http://www.w12studios.com/',
          description: 'Interaction design, motion design and prototyping on a range of digital products for world class entertainment and technology companies. Mentoring junior staff, helping establish studio culture and project leadership.'
        },
        {
          type:'project',
          typeAt: 'W12 Studios',
          title:'Okko TV',
          subTitle:'Interaction, motion design and prototyping',
          date: 'Nov 2014',
          url: 'https://medium.com/w12studios/okko-smart-tv-app-design-ff21ba1276a4',
          description: `Interface design for a Russian TV service that seamlessly blends On-Demand movies and TV shows, broadcast television channels and online video platforms into one experience.`
        },
        {
          type:'work',
          title:'Fade In Fade Out',
          subTitle:'VJ',
          date:'2014 - 2016',
          url: 'http://www.fadeinfadeout.co.uk/',
          description: 'Live visuals for music festivals and gigs.'
        },
        {
          type:'project',
          typeAt: 'side',
          title:`What's your Poison?`,
          subTitle:'Design and development',
          url: 'https://vimeo.com/118838729',
          description: `Online infographic showing the danger of food poisoning from a range of restaurants and food types. Information is Beautiful challenge shortlisted.`
        },
        {
          type:'project',
          typeAt: 'side',
          title:'Distance to Mars',
          subTitle:'Creator',
          date:'April 2013',
          url: 'http://www.distancetomars.com/',
          description: `Online infographic showing the distance between ourselves and our nearest planetary neighbour. Net magazine side project of the year shortlisted, Information is Beautiful Awards interactive category shortlisted.`
        },
        {
          type:'work',
          title:'W12 Studios',
          subTitle:'Interaction Designer',
          date:'Feb 2013 - Aug 2015',
          thumbs: 'w12mid',
          url: 'http://www.w12studios.com/',
          description: 'Interaction design, motion design and prototyping on a range of digital products for world class entertainment and technology companies.'
        },
        {
          type:'work',
          title:'W12 Studios',
          subTitle:'Junior Motion Designer',
          date:'June 2012 - Feb 2013',
          thumbs: 'w12jr',
          url: 'http://www.w12studios.com/',
          description: 'Motion design for a range of digital products for world class entertainment and technology companies.'
        },
        {
          type:'project',
          typeAt: 'Brunel University',
          title:'Superclaymation',
          subTitle:'Final dissertation',
          date:'March 2012',
          video: 'https://vimeo.com/42740883',
          description: `R&D project to re-create the look of traditional stop motion animation using modern off-the-shelf visual effects and 3D modelling platforms.`
        },
        {
          type:'project',
          typeAt: 'StreamAMG',
          title:'McFly live at Wembley arena',
          subTitle:'Encoding engineer',
          date:'Dec 2010',
          url: 'https://www.streamamg.com/',
          description: `The world's first ever live gig streaming to mobile phones. A big 9 camera nightmare in Wembley arena with a single day to set up, test, produce and tear down.`
        },
        {
          type:'work',
          title:'StreamAMG',
          subTitle:'Junior Encoding Engineer',
          date:'June 2010 - June 2011',
          url: 'https://www.streamamg.com/',
          description: 'Live video production and streaming for gigs and conferences.'
        },
        {
          type:'education',
          title:'Brunel University',
          subTitle:'BSc Broadcast Media Technology',
          date:'September 2008 - May 2012',
          url: 'https://www.brunel.ac.uk/digital-media',
          description: 'A broad education in design for screen, 3d animation and visual effects.'
        },
        {
          type:'work',
          title:'Before records began',
          subTitle:'Multi-disciplinary nerd',
          description: 'Adventures in cyberspace: Game modding, virtual worlds, indie movie making, online avatars, WW2 shooters and 3D modelling.'
        }
      ]
    };
  }
  onFilterClick(index) {
    let newFilterObject = this.state.filters;
    let activeCount = 0;
    for (let i=0; i<newFilterObject.length; i++) {
      if (newFilterObject[i].active === true) {
        activeCount++;
      }
    }
    if (activeCount === newFilterObject.length) {
      //console.log('all are active, set this one to true, rest to false');
      for (let i=0; i<newFilterObject.length; i++) {
        newFilterObject[i].active = false;
      }
      newFilterObject[index].active = true;
    } else if (newFilterObject[index].active === true) {
      if (activeCount === 1) {
        //console.log('all are inactive bar one, set all to true');
        for (let i=0; i<newFilterObject.length; i++) {
          newFilterObject[i].active = true;
        }
      } else {
        //console.log('some are active, set this one to false');
        newFilterObject[index].active = false;
      }
    } else if (newFilterObject[index].active === false) {
      //console.log('this one is inactive, set to active');
      newFilterObject[index].active = true;
    }
    this.setState({
      filters: newFilterObject
    });
  }
  getFilters() {
    let filters = this.state.filters.map((d,i)=>{
      return (
        <div className={ `App-filters-filter is-${ d.name } ${ d.active ? 'is-active' : '' }` } onClick={ this.onFilterClick.bind(this, i) }>
          <p className='App-filters-filter-name'>{ d.name }</p>
        </div>
      );
    });
    return (
      <div className='App-filters'>
        { filters }
      </div>
    );
  }
  getThumbnails(d) {
    let thumbs;
    if (d.thumbs === 'w12') {
      thumbs = (
        <div className='App-content-module-thumbs'>
          <img src={ BBC } />
          <img src={ Beeline } />
          <img src={ Intel } />
          <img src={ Microsoft } />
          <a href='https://medium.com/w12studios/okko-smart-tv-app-design-ff21ba1276a4' target='_blank'><img src={ Okko } /></a>
          <a href='https://gigaom.com/2013/01/01/inside-intels-tv-service-no-ces-announcement-but-plenty-of-juicy-details/' target='_blank'><img src={ Oncue } /></a>
          <img src={ RedBull } />
          <img src={ Samsung } />
          <img src={ Verizon } />
          <img src={ Vevo } />
        </div>
      );
    } else if (d.thumbs === 'w12mid') {
      thumbs = (
        <div className='App-content-module-thumbs'>
          <img src={ BBC } />
          <img src={ Intel } />
          <img src={ Microsoft } />
          <a href='https://medium.com/w12studios/okko-smart-tv-app-design-ff21ba1276a4' target='_blank'><img src={ Okko } /></a>
          <a href='https://gigaom.com/2013/01/01/inside-intels-tv-service-no-ces-announcement-but-plenty-of-juicy-details/' target='_blank'><img src={ Oncue } /></a>
          <img src={ RedBull } />
          <img src={ Samsung } />
          <img src={ Skype } />
        </div>
      );
    } else if (d.thumbs === 'w12jr') {
      thumbs = (
        <div className='App-content-module-thumbs'>
          <img src={ Intel } />
          <a href='https://gigaom.com/2013/01/01/inside-intels-tv-service-no-ces-announcement-but-plenty-of-juicy-details/' target='_blank'><img src={ Oncue } /></a>
          <img src={ Skype } />
        </div>
      );
    }
    return thumbs;
  }
  getAppModules() {
    // Check to see if filter is active
    // Get d.type, use it as index in filter, see if active is active
    // If active, build, otherwise don't
    let filteredModules = this.state.content.filter((d)=>{
      let filter = this.state.filters.find(filterItem=> filterItem.name === d.type);
      return filter.active;
    });
    let modules = filteredModules.map((d,i)=>{
      let video;
      if (d.video) {
        video = <ReactPlayer className='App-content-module-video' url={ d.video } width='100%' height='360px'  />
      }
      return (
        <a href={ d.url } target='_blank' className={ `App-content-module is-${d.type} ${d.typeAt ? `is-${ d.typeAt }` : ''}` } data-type={ d.type }>
          <div className='App-content-module-header'>
            <p className='App-content-module-header-label'>{ d.typeAt === 'side' ? 'Side Project' :  d.type + (d.typeAt ? ` at ${ d.typeAt }`:'' ) } </p>
          </div>
          <div className='App-content-module-body'>
            <h2 className='App-content-module-body-title'><span>{ d.title }</span></h2>
            <p className='App-content-module-body-subtitle'>{ d.subTitle }</p>
            <p className='App-content-module-body-date'>{ d.date }</p>
            <p className='App-content-module-body-description'>{ d.description }</p>
          </div>
          { this.getThumbnails(d) }
          { video }
        </a>
      );
    });
    return (
      <div className='App-content'>
        { modules }
      </div>
    );
  }
  onCopy() {

  }
  onCopyClick() {
    this.setState({
      copied: true
    });
    setTimeout(()=>{
      this.setState({
        copied: false
      });
    },1000);
    return false;
  }
  render() {
    return (
      <div className='App'>
      <div className='App-header'>
        <div className='App-header-rotation'>
          <h1 className='App-header-title'>David Paliwoda</h1>
          <div className='App-header-contact'>
            <CopyToClipboard
              onCopy={this.onCopy}
              text={'davidpaliwoda@gmail.com'}>
              <a className={`App-header-contact-link is-email ${ this.state.copied ? 'is-copied' : '' }`} href='#' onClick={ this.onCopyClick.bind(this) }>davidpaliwoda@gmail.com</a>
            </CopyToClipboard>
          </div>
        </div>
      </div>
        { this.getFilters() }
        { this.getAppModules() }
      </div>
    );
  }
}

export default App;
