import React from 'react';

class Donut extends React.Component {

    render() {
        const { sabor } = this.props.donut;

        if(sabor == 1)
            return (  <img src="img/Donas/donaVainilla.png" className="medio" /> );
        else
            if(sabor == 2)
                return (  <img src="img/Donas/donaChocolate.png" className="medio" /> );
            else
             return (  <img src="img/Donas/dona.png" className="medio" /> );
        }
}

export default Donut;
