import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GridList from '@material-ui/core/GridList';

export default class IndexProde extends Component {
    render() {
        return (
            <div className="container">
              <div >  
                <ul class="col-12">

                    {//Ronda Octavos 
                    }
                    <li className="ronda octavos float-left">
                        <header>
                            <h3>Octavos</h3>
                        </header>

                        <ul>
                            {//Cruce 1
                            }
                            <li className="eliminatorias">
                                <span>LLave nro 1</span>
                                <table >
                                    <body>
                                        <tr>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    Independiente
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    2-0
                                                </span>
                                            </td>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    Racing
                                                </span>
                                            </td>
                                        </tr>
                                    </body>
                                </table>
                            </li>

                           { // Cruce 2 
                           }
                            <li className="eliminatorias">
                                <span>Llave nro 2</span>
                                {
                                        // react -> laravel -> bd -> 8ros cruces
                                        //reque ajax desdee react

                                        //json {,,  , , ,  }
                                }
                                <table>
                                    <body>
                                        <tr>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    Boca
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    3-3
                                                </span>
                                            </td>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    River
                                                </span>
                                            </td>
                                        </tr>
                                    </body>
                                </table>
                                </li>
                        </ul>
                    </li>

                    {// Ronda Cuartos 
                    }
                    <li className="ronda cuartos float-left">
                        <header>
                            <h3>Cuartos</h3>
                        </header>

                        <ul>
                            {// Cruce 1
                            }
                            <li className="eliminatorias">
                                <span>Llave nro 9</span>
                                <table>
                                    <body>
                                        <tr>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                   Ganador cruce 1
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                   -
                                                </span>
                                            </td>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    Ganador cruce 2
                                                </span>
                                            </td>
                                        </tr>
                                    </body>
                                </table>
                            </li>

                            {// Cruce 2 
                            }
                            <li className="eliminatorias">
                                <span>Llave nro 10</span>
                                
                                <table>
                                    <body>
                                        <tr>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                   Ganador cruce 3
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    -
                                                </span>
                                            </td>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    Ganador cruce 4
                                                </span>
                                            </td>
                                        </tr>
                                    </body>
                                </table>
                                </li>
                        </ul>
                    </li>

                    {// Semifinal
                    }
                    <li className="ronda semifinal float-left">
                        <header>
                            <h3>Semifinal</h3>
                        </header>

                        <ul>
                            {// Cruce 1 
                            }
                            <li className="eliminatorias">
                                <span>+Info</span>
                                <table>
                                    <body>
                                        <tr>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                   Ganador cruce 1
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                   -
                                                </span>
                                            </td>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    Ganador cruce 2
                                                </span>
                                            </td>
                                        </tr>
                                    </body>
                                </table>
                            </li>

                            {// Cruce 2 
                            }
                            <li className="eliminatorias">
                                <span>+Info</span>
                                
                                <table>
                                    <body>
                                        <tr>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                   Ganador cruce 3
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    -
                                                </span>
                                            </td>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    Ganador cruce 4
                                                </span>
                                            </td>
                                        </tr>
                                    </body>
                                </table>
                                </li>
                        </ul>
                    </li>

                    {// Ronda Final
                    }
                    <li className="ronda final float-left">
                        <header>
                            <h3>Final</h3>
                        </header>

                        <ul>
                            {// Cruce 1  Final
                            }
                            <li className="eliminatorias">
                                <span>+Info</span>
                                <table>
                                    <body>
                                        <tr>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                   Ganador cruce 1
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                   -
                                                </span>
                                            </td>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    Ganador cruce 7
                                                </span>
                                            </td>
                                        </tr>
                                    </body>
                                </table>
                            </li>

                            {// Cruce 2  3er y 4to puesto
                            }
                            <li className="eliminatorias">
                                <span>+Info</span>
                                
                                <table>
                                    <body>
                                        <tr>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                   Perdedor cruce 1
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    -
                                                </span>
                                            </td>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    Perdedor cruce 7
                                                </span>
                                            </td>
                                        </tr>
                                    </body>
                                </table>
                                </li>
                        </ul>
                    </li>

                    {// Semifinal
                    }
                    <li className="ronda semifinal float-left">
                        <header>
                            <h3>Semifinal</h3>
                        </header>

                        <ul>
                            {// Cruce 1 
                            }
                            <li className="eliminatorias">
                                <span>+Info</span>
                                <table>
                                    <body>
                                        <tr>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                   Ganador cruce 1
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                   -
                                                </span>
                                            </td>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    Ganador cruce 2
                                                </span>
                                            </td>
                                        </tr>
                                    </body>
                                </table>
                            </li>

                            {// Cruce 2 
                            }
                            <li className="eliminatorias">
                                <span>+Info</span>
                                
                                <table>
                                    <body>
                                        <tr>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                   Ganador cruce 3
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    -
                                                </span>
                                            </td>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    Ganador cruce 4
                                                </span>
                                            </td>
                                        </tr>
                                    </body>
                                </table>
                                </li>
                        </ul>
                    </li>

                    {// Ronda Cuartos
                    }
                    <li className="ronda cuartos float-left">
                        <header>
                            <h3>Cuartos</h3>
                        </header>

                        <ul>
                            {// Cruce 1
                            }
                            <li className="eliminatorias">
                                <span>+Info</span>
                                <table>
                                    <body>
                                        <tr>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                   Ganador cruce 1
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                   -
                                                </span>
                                            </td>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    Ganador cruce 2
                                                </span>
                                            </td>
                                        </tr>
                                    </body>
                                </table>
                            </li>

                            {// Cruce 2
                            }
                            <li className="eliminatorias">
                                <span>+Info</span>
                                
                                <table>
                                    <body>
                                        <tr>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                   Ganador cruce 3
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    -
                                                </span>
                                            </td>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    Ganador cruce 4
                                                </span>
                                            </td>
                                        </tr>
                                    </body>
                                </table>
                                </li>
                        </ul>
                    </li>

                    {// Ronda Octavos
                    }
                    <li className="ronda octavos float-left">
                        <header>
                            <h3>Octavos</h3>
                        </header>

                        <ul>
                            {//Cruce 1
                            }
                            <li className="eliminatorias">
                                <span>+Info</span>
                                <table>
                                    <body>
                                        <tr>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                   Palmeiras
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    2-0
                                                </span>
                                            </td>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    Santos
                                                </span>
                                            </td>
                                        </tr>
                                    </body>
                                </table>
                            </li>

                            { // Cruce 2 
                            }
                            <li className="eliminatorias">
                                <span>+Info</span>
                                
                                <table>
                                    <body>
                                        <tr>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                   Nacional
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    3-3
                                                </span>
                                            </td>
                                            <td>
                                                <figure>
                                                    <img src="" alt="" />
                                                </figure>
                                                <span>
                                                    Sacachispas
                                                </span>
                                            </td>
                                        </tr>
                                    </body>
                                </table>
                                </li>
                        </ul>
                    </li>
                {//fin del torneo
                }
                </ul>


            </div>    
            </div>
        );
    }
}
