import React, { Component } from 'react';
import './css/Bracket.css'

export default class Bracket extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h3>Prode: {this.props.name}</h3>
                <div className="row mt-5">
                    <div className="col-md-2">
                        <label htmlFor="octavos" className="ml-5">OCTAVOS</label>
                        {this.octavos()}
                    </div>
                    <div className="col-md-2 ml-4">
                        <label htmlFor="cuartos" className="ml-5">CUARTOS</label>
                        {this.cuartos()}
                    </div>
                    <div className="col-md-2 ml-4">
                        <label htmlFor="semis" className="ml-5">SEMIS</label>
                        {this.semis()}
                    </div>
                    <div className="col-md-2 ml-4">
                        <label htmlFor="final" className="ml-5">FINAL</label>
                        {this.final()}
                    </div>
                    <div className="col-md-2 ml-4">
                        <label htmlFor="campeon" className="ml-5">CAMPEÓN</label>
                        {this.campeon()}
                    </div>
                </div>
                <div className="mt-4 colsize">
                    <label>Cambiar nombre:</label>
                    <input type="text" className="form-control" placeholder="Nombre del Prode" value={this.props.name} required onChange={this.props.onChange}></input>
                    <button type="button" className="btn btn-primary mt-4" onClick={this.props.save}>Guardar</button>
                </div>
                </div>
        )
    }

    octavos(){
        let i=0;
        let lista=[];
        while(i<16){
            lista.push(
                <ul key={i} className="list-group list-group-flush octavosspacer">
                        <span className="border bordersize">
                            <button type="button" className="btn btn-light btnsize" id={i} onClick={this.props.handleOctavos}>{this.props.octavos[i]}</button>
                        </span>
                        <span className="border bordersize">
                            <button type="button" className="btn btn-light btnsize" id={i+1} onClick={this.props.handleOctavos}>{this.props.octavos[i+1]}</button>
                        </span>
                </ul>
            );
            i=i+2;
        }
        return lista;
    }

    cuartos(){
        let i=0;
        let lista=[];
        while(i<8){
            let btn1=false;
            let btn2=false;
            let classN="list-group list-group-flush cuartosspacer";
            if(this.props.cuartos[i]=="")
                btn1=true;
            if(this.props.cuartos[i+1]=="")
                btn2=true;
            if(i!=0)
                classN="list-group list-group-flush cuartosspacer2";
            lista.push(
                <ul key={i} className={classN}>
                        <span className="border bordersize">
                            <button type="button" className="btn btn-light btnsize" id={i} disabled={btn1} onClick={this.props.handleCuartos}>{this.props.cuartos[i]}</button>
                        </span>
                        <span className="border bordersize">
                            <button type="button" className="btn btn-light btnsize" id={i+1} disabled={btn2} onClick={this.props.handleCuartos}>{this.props.cuartos[i+1]}</button>
                        </span>
                </ul>
            );
            i=i+2;
        }
        return lista;
    }

    semis(){
        let i=0;
        let lista=[];
        while(i<4){
            let btn1=false;
            let btn2=false;
            let classN="list-group list-group-flush semisspacer";
            if(this.props.semis[i]=="")
                btn1=true;
            if(this.props.semis[i+1]=="")
                btn2=true;
            if(i!=0)
                classN="list-group list-group-flush semisspacer2";
            lista.push(
                <ul key={i} className={classN}>
                        <span className="border bordersize">
                            <button type="button" className="btn btn-light btnsize" id={i} disabled={btn1} onClick={this.props.handleSemis}>{this.props.semis[i]}</button>
                        </span>
                        <span className="border bordersize">
                            <button type="button" className="btn btn-light btnsize" id={i+1} disabled={btn2} onClick={this.props.handleSemis}>{this.props.semis[i+1]}</button>
                        </span>
                </ul>
            );
            i=i+2;
        }
        return lista;
    }

    final(){
        let lista=[];
        let btn1=false;
        let btn2=false;
        if(this.props.final[0]=="")
                btn1=true;
        if(this.props.final[1]=="")
            btn2=true;
        lista.push(
            <ul key="0" className="list-group list-group-flush finalspacer">
                    <span className="border bordersize">
                        <button type="button" className="btn btn-light btnsize" id="0" disabled={btn1} onClick={this.props.handleFinal}>{this.props.final[0]}</button>
                    </span>
                    <span className="border bordersize">
                        <button type="button" className="btn btn-light btnsize" id="1" disabled={btn2} onClick={this.props.handleFinal}>{this.props.final[1]}</button>
                    </span>
            </ul>
        );
        return lista;
    }

    campeon(){
        let lista=[];
        let btn=false;
        if(this.props.campeon=="")
                btn=true;
            lista.push(
                <ul key="0" className="list-group list-group-flush campeonspacer">
                        <span className="border bordersize">
                            <button type="button" className="btn btn-light btnsize" id="0" disabled={btn}>{this.props.campeon}</button>
                        </span>
                </ul>
            );
        return lista;
    }

}