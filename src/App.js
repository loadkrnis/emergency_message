import React from 'react';
import AppAppBar from './modules/views/AppAppBar';
import Location from './modules/views/Location'


function App(obj) {
  return (
      // <div>
      //   {db.map(data => <message num={data.key} sender={data.sender} areas={data.areas} content={data.content} data={data.date}  />)}
      // </div>
    <React.Fragment>
        <AppAppBar />
        {/*<ProductHero />*/}
        {/*<ProductValues />*/}
        <div id="content">
        <Location/>
        </div>
        {/*<ProductCTA />*/}
        {/*<ProductSmokingHero />*/}
        {/*<AppFooter />*/}
    </React.Fragment>
  );
}
export default App;
