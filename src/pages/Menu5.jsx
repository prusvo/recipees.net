
import data from '../json/Dishes.json'
import Header from "../components/Header";
import './menu.css'
import Accordion from "../components/Accordion";

function Menu5( dish) {
  
    return (
      <div>
      <Header/>
      <div className='container'>
          
            
        
            <div className="Menu">
              <div>
                <h1 className="page-title"> Menu №5</h1>
              </div>
              <h2 className='border'>Zakąski</h2>
              <div className="menu-box">
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
              <h5 className="dish-name">STUDZIENINA</h5>
              <div className="components">
                <li >terrina z goleni ze świni złotnickiej</li>
                <li >ozór wołowy  </li>
                <li >chimichurri z kiszonymi grzybami</li>
                <li >śmietana z chrzanem</li>
                <li >chleb</li>
              </div>
              <h2 className='border'>Mniejsze</h2>
              <h5 className="dish-name">SELER</h5>
              
              <div className="components">
                <li >blin selerowy z truflą</li>
                <li >wędzony sos maślany z serem ustrzyckim</li>
                <li >jajko na miękko</li>
                <li >boczniak mikołajkowy</li>
                <li >rzepak</li>
                <li >ciastko kruche</li>
                <li >krwawnik</li>
              </div>
              <h5 className="dish-name">MODRA KAPUSTA</h5>
              <div className="components">
                <li >duszona czerwona kapusta</li>
                <li >kozi twaróg z Łomnic</li>
                <li >rodzynki</li>
                <Accordion dishes={data[39].dishName} skladniki={data[39].ingridients}/>
                <li >sos z miodem pitnym</li>
                <li >amarantus</li>
              </div>
              <h5 className="dish-name">TATAR</h5>
              <div className="components">
                <li >rostbef wołowy z Pniew</li>
                <li >grzyby</li>
                <li >słonecznik</li>
                <li >majonez z karmelizowanej i kiszonej kapusty</li>
                <li >kasztany</li>
                <li >gorczyca</li>
                <li >chleb</li>
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
              <h5 className="dish-name">GĘSIE "PIPKI"</h5>
              <div className="components">
                <li >gotowane żołądki z gęsi</li>
                <li >suszona wątróbka</li>
                <li >puree z palonego kalafiora</li>
                <li >cebula z węgla</li>
                <li >gorczyca</li>
                <li >sos rustido z dereniem</li>
                <li >smażony jarmuż</li>
              </div>
              <h2 className='border'>Dania główne</h2>
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
              <h2 className='border'>Dodatki</h2>
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
              <h2 className='border'>Desery</h2>
              <h5 className="dish-name">SERNIK </h5>
              <div className="components">
              <Accordion dishes={data[33].dishName} skladniki={data[33].ingridients}/>
                <li >twaróg z Wańczykówki </li>
                <li >brzoskwinie z sadów trzebnickich</li>
                <li >morwa</li>
                <li >żel z kwiatów bzu</li>
                <li >majeranek</li>
              </div>
              <h5 className="dish-name">TOPINAMBURI ŚLIWKA</h5>
              <div className="components">
              <Accordion dishes={data[38].dishName} skladniki={data[38].ingridients}/>
              <Accordion dishes={data[37].dishName} skladniki={data[37].ingridients}/>
              <Accordion dishes={data[35].dishName} skladniki={data[35].ingridients}/>
                <li >orzechy laskowe</li>
                <li >miód tymiankowy</li>
              </div>
              </div>
            </div>
        </div>
      </div>
    );
  }


 
export default Menu5;