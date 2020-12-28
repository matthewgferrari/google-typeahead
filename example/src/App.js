import React, { useState } from "react"
import './App.css';
import Typeahead from "google-typeahead"
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const shortList = ["There", "Are", "Only", "Eight", "Options", "In", "This", "List"]
  const longList = ["Adult","Aeroplane","Air","Aircraft Carrier","Airforce","Airport","Album","Alphabet","Apple","Arm","Army","Baby","Baby","Backpack","Balloon","Banana","Bank","Barbecue","Bathroom","Bathtub","Bed","Bed","Bee","Bible","Bible","Bird","Bomb","Book","Boss","Bottle","Bowl","Box","Boy","Brain","Bridge","Butterfly","Button","Cappuccino","Car","Car-race","Carpet","Carrot","Cave","Chair","Chess Board","Chief","Child","Chisel","Chocolates","Church","Church","Circle","Circus","Circus","Clock","Clown","Coffee","Coffee-shop","Comet","Compact Disc","Compass","Computer","Crystal","Cup","Cycle","Data Base","Desk","Diamond","Dress","Drill","Drink","Drum","Dung","Ears","Earth","Egg","Electricity","Elephant","Eraser","Explosive","Eyes","Family","Fan","Feather","Festival","Film","Finger","Fire","Floodlight","Flower","Foot","Fork","Freeway","Fruit","Fungus","Game","Garden","Gas","Gate","Gemstone","Girl","Gloves","God","Grapes","Guitar","Hammer","Hat","Hieroglyph","Highway","Horoscope","Horse","Hose","Ice","Ice-cream","Insect","Jet fighter","Junk","Kaleidoscope","Kitchen","Knife","Leather jacket","Leg","Library","Liquid","Magnet","Man","Map","Maze","Meat","Meteor","Microscope","Milk","Milkshake","Mist","Money $$$$","Monster","Mosquito","Mouth","Nail","Navy","Necklace","Needle","Onion","PaintBrush","Pants","Parachute","Passport","Pebble","Pendulum","Pepper","Perfume","Pillow","Plane","Planet","Pocket","Post-office","Potato","Printer","Prison","Pyramid","Radar","Rainbow","Record","Restaurant","Rifle","Ring","Robot","Rock","Rocket","Roof","Room","Rope","Saddle","Salt","Sandpaper","Sandwich","Satellite","School","Sex","Ship","Shoes","Shop","Shower","Signature","Skeleton","Slave","Snail","Software","Solid","Space Shuttle","Spectrum","Sphere","Spice","Spiral","Spoon","Sports-car","Spot Light","Square","Staircase","Star","Stomach","Sun","Sunglasses","Surveyor","Swimming Pool","Sword","Table","Tapestry","Teeth","Telescope","Television","Tennis racquet","Thermometer","Tiger","Toilet","Tongue","Torch","Torpedo","Train","Treadmill","Triangle","Tunnel","Typewriter","Umbrella","Vacuum","Vampire","Videotape","Vulture","Water","Weapon","Web","Wheelchair","Window","Woman","Worm","X-ray"]

  const SearchIcon = () => { return (
    <div style={{  marginRight: ".5rem", paddingTop: ".2rem" }}>
      <svg width={24} height={24} fill="#5F6368">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
    </div>
    )}
    
    const MicrophoneIcon = () => { return (
    <div style={{  marginLeft: ".5rem", paddingTop: ".2rem" }}>
      <svg width={24} height={24} >
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill="#4285F4" d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z" />
        <path fill="#34A853" d="M11 18.92h2V22h-2z" />
        <path fill="#F4B400" d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z" />
        <path fill="#EA4335" d="M12 17c-1.38 0-2.63-.56-3.54-1.47l-1.41 1.41A6.99 6.99 0 0012.01 19c3.87 0 6.98-3.14 6.98-7h-2c0 2.76-2.23 5-4.99 5z" />
      </svg>
    </div>
    )}

var code1 = `function App() {
  const [val, setVal] = useState("")
  return (
    <div>
      <Typeahead style={{ width: "300px" }} options = {shortList} value = {val} setValue = {(v) => setVal(v)} />
      </div>
      );
}`
var code2 = `function App() {
  const [val, setVal] = useState("")
  return (
    <div>
      <Typeahead className = "exampleClass" style={{width: "500px"}} options = {longList} value = {val} setValue = {(v) => setVal(v)} LeftSideComponent = {SearchIcon} RightSideComponent = {MicrophoneIcon} limit = {5} canCreate={true}/>      
      </div>
      );
}`
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#6c6783"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#e09142"
      }
    },
    {
      types: ["property", "function"],
      style: {
        color: "#9a86fd"
      }
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#eeebff"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "#c4b9fe"
      }
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "at-rule",
        "placeholder",
        "variable"
      ],
      style: {
        color: "#ffcc99"
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through"
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["important"],
      style: {
        color: "#c4b9fe"
      }
    }
  ]
};

function App() {

  return (
    <div className="App" style={{ marginTop: "3rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

      
        <div style={{ paddingLeft: "1rem" }}>
          <div className = "makeshift-google-typeahead-base">
            <SearchIcon/>
            <div className = "titleInBar">Google-Typeahead</div>
            <MicrophoneIcon/>
            </div>
          <h4 style={{ padding: "0", marginTop: "0" }}>A modern and dynamic typeahead inspired by the design of Google Search</h4>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: ".5rem" }}>
        <svg
          style={{ marginRight: ".5rem" }}
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 438.549 438.549"
        >
          <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
        </svg>
        @<a style={{ marginRight: ".5rem" }} href="https://github.com/matthewgferrari/google-typeahead">matthewgferrari/google-typeahead</a>
        |
        <svg
          width={50}
          height={20}
          style={{ marginRight: ".5rem", marginLeft: ".5rem" }}
          viewBox="0 0 256 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
        >
          <path d="M0 0v85.498h71.166V99.83H128V85.498h128V0H0z" fill="#CB3837" />
          <path
            d="M42.502 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V14.332H42.502zm42.996 0v71.166h28.664V71.166h28.17V14.332H85.498zM128 56.834h-13.838v-28.17H128v28.17zm56.834-42.502h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V28.664h14.332v42.502h14.332V14.332h-57.328z"
            fill="#FFF"
          />
        </svg>

        @<a href="https://www.npmjs.com/package/google-typeahead">google-typeahead</a>
      </div>
      <div className="codeSpace" style = {{marginBottom:"3rem"}}>
        <LiveProvider code={code1} scope={{ Typeahead, useState, shortList, longList, SearchIcon, MicrophoneIcon }} theme={theme} >
          <div className="coding">
            <LiveEditor />
          </div>
          <div className="error" style={{ backgroundColor: "rgb(42, 39, 52)", borderRadius: ".4rem", color: "white" }}>
            <LiveError />
          </div>
          <div style={{ backgroundColor: "transparent", marginTop: "2rem" }}>
            <LivePreview />
          </div>
        </LiveProvider>

      </div>
      <div className="codeSpace">
        <LiveProvider code={code2} scope={{ Typeahead, useState, shortList, longList, SearchIcon, MicrophoneIcon }} theme={theme} >
          <div className="coding">
            <LiveEditor />
          </div>
          <div className="error" style={{ backgroundColor: "rgb(42, 39, 52)", borderRadius: ".4rem", color: "white" }}>
            <LiveError />
          </div>
          <div style={{ backgroundColor: "transparent", marginTop: "2rem" }}>
            <LivePreview />
          </div>
        </LiveProvider>

      </div>
      
    </div>
  );
}

export default App;
