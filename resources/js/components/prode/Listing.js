import React, { Component } from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom';
import axios from 'axios';
import Pagination from "react-js-pagination";

export default class Listing extends Component {

    constructor(){
        super();
        this.state={
            prodes:[],
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:3
        }
        this.handlePageChange=this.handlePageChange.bind(this);
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/prode')
        .then(response=>{
            this.setState({
                prodes:response.data.data,
                itemsCountPerPage:response.data.per_page,
                totalItemsCount:response.data.total,
                activePage:response.data.current_page
            });
        });
    }

    onDelete(prode_id){
        axios.delete('http://127.0.0.1:8000/api/prode/delete/'+prode_id)
        .then(response=>{
            var prodes = this.state.prodes;

            for(var i=0; i<prodes.length; i++){
                if(prodes[i].id==prode_id){
                    prodes.splice(i,1);
                    this.setState({prodes:prodes});
                }
            }
        });
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        //this.setState({activePage: pageNumber});
        axios.get('http://127.0.0.1:8000/api/prode?page='+pageNumber)
        .then(response=>{
            this.setState({
                prodes:response.data.data,
                itemsCountPerPage:response.data.per_page,
                totalItemsCount:response.data.total,
                activePage:response.data.current_page
            });
        });
      }

    render () {
    return (
        <div>
            <table className="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">Prode</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Creado</th>
                    <th scope="col">Editado</th>
                    <th scope="col">Modificaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.prodes.map(prode=>{
                            if(prode.user_id)
                            return  (
                                <tr>
                                    <th scope="row"><Link className="text-white" to={`/prode/edit/${prode.id}`}>{prode.name}</Link></th>
                                    <td>{prode.prode_completo==0?("Incompleto"):("Completo")}</td>
                                    <td>{prode.created_at}</td>
                                    <td>{prode.updated_at}</td>
                                    <td>
                                        <Link className="text-white" to={`/prode/edit/${prode.id}`}>Editar</Link>
                                        &nbsp; &nbsp;
                                        <a class="text-white" href='#' onClick={this.onDelete.bind(this,prode.id)}>Borrar</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <div className="d-flex justify-content-center">
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.handlePageChange}
                    itemClass='page-item text-white bg-dark'
                    linkClass='page-link text-white bg-dark'
                />
            </div>
            
        </div>
    );
    }
}