import Header from "../components/Header";
import './menu.css'
import data from '../json/Dishes.json'
import Accordion from "../components/Accordion";


function Menu( dish) {
  
    return (
      <div>
        <Header/>
        <div className="container">
        <div className="Menu">
          <div>
              <h1 className="page-title"> Menu №4</h1>
          </div>
          <div className="menu-box">
          <h2 className="border">Zakąski</h2>
            <h5 className="dish-name">ŚLEDŹ</h5>
              <div className="components">
                <li >piklowana czerwona kapusta z imbirem</li>
                <Accordion dishes={data[34].dishName} skladniki={data[34].ingridients}/>
                <li >chrzan</li>
                <li >amarantus</li>
              </div>
              <h5 className="dish-name">BRUKSELKA</h5>
              <div className="components">
                <li >brukselka smażona</li>
                <Accordion dishes={data[0].dishName} skladniki={data[0].ingridients}/>
                <li >żółtko</li>
                <li >prażona cebula</li>
                <li >słonecznik z carnuszką i chilli</li>
                <li >szczypior</li>
              </div>
              <h5 className="dish-name">PASZTETOWA</h5>
              <div className="components">
                <li >pasta z wędzonego pstrąga i makreli</li>
                <Accordion dishes={data[17].dishName} skladniki={data[17].ingridients}/>
                <li >kawior </li>
                <li >cebula perłowa</li>
                <Accordion dishes={data[19].dishName} skladniki={data[19].ingridients}/>
                <li >szczypior</li>
              </div>
              <h2 className="border">Mniejsze</h2>
              <h5 className="dish-name">GRZYBY LEŚNE</h5>
              
              <div className="components">
                <li >rydze i kurki z patelni</li>
                <li >opalany por</li>
                <li >wędzony ser ustrzycki </li>
                <Accordion dishes={data[6].dishName} skladniki={data[6].ingridients}/>
                <li >piklowany rzepak</li>
                <li >kwaśna smietana</li>
                <li >szczypior</li>
              </div>
              <h5 className="dish-name">KAPUSTA</h5>
              <div className="components">
              <Accordion dishes={data[23].dishName} skladniki={data[23].ingridients}/>
              <Accordion dishes={data[39].dishName} skladniki={data[39].ingridients}/>
                <li >bułka tarta</li>
                <li >kwaśna śmietana</li>
                <li >koper</li>
              </div>
              <h5 className="dish-name">TATAR</h5>
              <div className="components">
                <li >rostbef wołowy z Pniew</li>
                <li >skwarki</li>
                <li >podsuszone pomidory</li>
                <li >cebula w occie</li>
                <li >kapary</li>
                <Accordion dishes={data[1].dishName} skladniki={data[1].ingridients}/>
                <li >szczypior</li>
              </div>
              <h5 className="dish-name">KASZANKA</h5>
              <div className="components">
                <li >wieprzowina złotnicka</li>
                <li > marynowana słonina</li>
                <li >fasola „jaś”</li>
                <li >jabłko</li>
                <Accordion dishes={data[3].dishName} skladniki={data[3].ingridients}/>
                <li >majeranek</li>
              </div>
              <h5 className="dish-name">OGON Z WOŁA</h5>
              <div className="components">
                <li >biała kiełbasa</li>
                <li >gotowane buraki</li>
                <li >agrest</li>
                <li >grzybki bukowe</li>
                <li >demi glace ze śliwką</li>
                <li >chrzan</li>
                <li >amarantus</li>
              </div>
              <h2 className="border">Dania główne</h2>
              <h5 className="dish-name">MAKRELA BAŁTYCKA</h5>
              <div className="components">
                <li >sos pomidorowy z szafranem</li>
                <li >pomidory koktajlowe</li>
                <Accordion dishes={data[22].dishName} skladniki={data[22].ingridients}/>
                <li >cebulka perłowa</li>
                <li >kawior</li>
              </div>
              <h5 className="dish-name">NASZE "RUSKIE"</h5>
              <div className="components">
                <Accordion dishes={data[7].dishName} skladniki={data[7].ingridients}/>
                <li >karmelizowana cebula</li>
                <li >sos z obierków ziemniaka</li>
                <Accordion dishes={data[39].dishName} skladniki={data[39].ingridients}/>
                <li >bułka tarta</li>
                <li >cebulka perłowa</li>
                <li >piklowany rzepak</li>
                <li >chipsy z topinamburu</li>
              </div>
              <h5 className="dish-name">SCHAB</h5>
              <div className="components">
                <li >wieprzowina z Pniew - sezonowana 14 dni</li>
                <li >słonina</li>
                <li >piklowana gorczyca</li>
                <li >demi glace ze śliwką</li>
                <li >szczypior</li>
              </div>
              <h2 className="border">Dodatki</h2>
              <h5 className="dish-name">PUREE ZIEMNIACZANE</h5>
              <div className="components">
                <li >okrasa z karmelizowanej cebuli</li>
                <li >palone masło</li>
                <li >szczypior</li>
              </div>
              <h5 className="dish-name">MIZERIA </h5>
              <div className="components">
                <li >kompresowany ogórek</li>
                <li >maślanka</li>
                <Accordion dishes={data[25].dishName} skladniki={data[25].ingridients}/>
                <li >kwaśna śmietana</li>
                <li >smażony czosnek</li>
                <li >olej koprowy</li>
              </div>
              <h5 className="dish-name">SAŁATY </h5>
              <div className="components">
                <li >szpinak </li>
                <li >młode liście szczawiu</li>
                <li >ogórek</li>
                <li >rzodkiewka</li>
                <Accordion dishes={data[18].dishName} skladniki={data[18].ingridients}/>
              </div>
              <h2 className="border">Desery</h2>
              <h5 className="dish-name">KREMÓWKA </h5>
              <div className="components">
                <li >prażynki z gryki </li>
                <li >krem z palonego masła</li>
                <li >owoce leśne</li>
                <li >syrop lawendowy</li>
                <li >miód tymiankowy</li>
              </div>
              <h5 className="dish-name">SERNIK </h5>
              <div className="components">
              <Accordion dishes={data[33].dishName} skladniki={data[33].ingridients}/>
                <li >twaróg z Wańczykówki </li>
                <li >brzoskwinie z sadów trzebnickich</li>
                <li >morwa</li>
                <li >żel z kwiatów bzu</li>
                <li >majeranek</li>
              </div>
              </div>
            </div>
          </div> 
      </div>
        
      
    );
  }


 
export default Menu;