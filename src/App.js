import varkala from './varkala.jpg'
import goa from './goa.jpg'
import waikiki from './waikiki.jpg'
import karbi from './krabi.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Top">
        <div className="nav_bar">
        <p className="Travel">Travel.CO</p>  
        <div className="Icons">
          <div className="icons">HOME</div>
          <div className="icons">BLOG</div>
          <div className="icons">ABOUT US</div>
          <div className="icons">CONTACT</div>
        </div>
        </div>
      
        <div className="heading">
        <h1 >Travel</h1>
        <p>
          Here are my favorite travel and adventure quotes, paired with images from my journeys all around the world.
        </p>
        <p className="quotes">
           ITS NOT ABOUT THE DESTINATION ITS ABOUT THE JOURNEY
        </p>
        <button className="read_me" >Read More</button>
        </div>
        
      </div>
      
      <div className="mid">
        <div className="start" >
            <p className="p">Start Your Journey</p>
            <p className="p1">THE HAPPIEST PLACE ON EARTH</p>
        </div>
        <div className="grid">
              <div className="g1">
                  <img className="img" src={varkala} alt="varkala"/>
                  <p class="p2">Varkala</p>
                  <button className="book_now">BOOK NOW</button>
              </div>
              <div className="g1">
                  <img className="img" src={goa} alt="varkala"/>
                  <p class="p2">Goa</p>
                  <button className="book_now">BOOK NOW</button>
              </div>
              <div className="g1">
                  <img className="img" src={waikiki} alt="varkala"/>
                  <p class="p2">waikiki</p>
                  <button className="book_now">BOOK NOW</button>
              </div>
              <div className="g1">
                  <img className="img" src={karbi} alt="varkala"/>
                  <p class="p2">Karbi</p>
                  <button className="book_now">BOOK NOW</button>
              </div>
        </div>
        <div className="mid2">
          <div className="m1">
                <p className="mp1">Browse Tours by Activity</p>
                <p className="mp2"> Outdoor Activity</p>
                <p className="mp2">Culture & Thematic Tours</p>
                <p className="mp2">Family Friends tours</p>
                <p className="mp2">city Tours</p>
          </div>
          <div className="m2">
                <p className="mp3">Newsletters</p>
                <p className="mp4">Subscribe for updates and promotions</p>
                <input className="mp5"  placeholder='Email'></input><button className="mp6">Sign in</button>
                <p></p>
          </div>
        </div>
        <div className="footer">
                <p className="fp1">Travel.CO</p>
                <p className="fp2">
                  Meta  |  Instagram  |  X  | whatsapp  | Email
                </p>
                <p className="fp3">Travel makes one modest. You see what a tiny place you occupy in the world.</p>
        </div>
      </div>
    </div>
    

  );
}

export default App;
