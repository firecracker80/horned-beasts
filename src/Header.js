import React from 'react';

class Header extends React.Component {
  render (){
    return (
      <section class="m-2">
        <header className='pt-5 text-center'><h1>Ficticious and Real Horned Beasts</h1></header>
        <p className='p-5 text-center'>Show us some love, click the ❤️!</p>
      </section>
    );
  }
};

export default Header;