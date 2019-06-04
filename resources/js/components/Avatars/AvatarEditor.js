import React, { Component } from "react";

import AvatarShower from './AvatarShower'
import Errors from '../Errors'
import Loading from '../Loading'

class AvatarEditor extends Component{

    constructor(props){
        super(props);
        //Si estoy editando seteo los valores iniciales al avatar que me pasaron
        if(this.props.mode=='edit'){
            this.state={
                currentItem: 'body',
                max_items: this.props.items.bodyitems.length,

                field_name: this.props.avatar.name,
                body: parseInt(this.props.avatar.body_id/10),
                head: parseInt(this.props.avatar.head_id/10),
                upperbody: parseInt(this.props.avatar.upperbody_id/10),
                lowerbody: parseInt(this.props.avatar.lowerbody_id/10),
                extra: parseInt(this.props.avatar.extra_id/10),

                error: false,
                status: '',
                isSaving: false,
            }        
        }else{
            this.state={
                currentItem: 'body',
                max_items: this.props.items.bodyitems.length,

                field_name: '',
                body: 0,
                head: 0,
                upperbody: 0,
                lowerbody: 0,
                extra: 0,

                error: false,
                status: null,
                isSaving: false,
            }
        }
    }


    fetchAvatar(method,url,data){
        const bearer = 'Bearer ' + this.props.api_token
        console.log("AVATAREDITOR: posting avatar");
        fetch(url, { 
            method: method,
            headers: {
                'Authorization': bearer, 
                'Accept': 'application/json'  
            },
            body: data
        })
        .then( 
            (response) => {                        
                return response.json();
            }
        )
        .then(
            (result) => {
                if (result.errors){
                    this.setState({
                        error: true,
                        status: result.errors.name,
                        isSaving: false,
                    })                  
                }
                else if (result.status == 'success'){
                    console.log("AVATAREDITOR: posting avatar finished");                    
                    this.setState({
                        status: result.status,
                    });
                    // Uso funcion de padre para resetear el modo
                    this.props.resetMode(result.data.avatar);
                }
            }
        );
    }

    handleFieldNameChange = (e) => {
        this.setState({ field_name: e.target.value });
    }

    getIDfromIndex(index){
        // Dado el indice del arreglo
        // Retorno el ID de la base de datos
        // Los id son de la forma: 1, 11, 21, 31, 41
        // Los indices son de la forma: 0 , 1 , 2 , 3, 4
        if(index == 0){
            return 1;
        }
        else{
            let id=(index*10)+1;          
            return id
        }
    }

    handleSaveAvatar = (e) =>{
        e.preventDefault();
        // Validacion de input
        let name=this.state.field_name;
        if(name.length>32){
            this.setState({
                error: true,
                status: 'El nombre no debe ser de mas de 32 caracteres',
                field_name: ''
            })
            return;
        }
        if(name.length<1){
            this.setState({
                error: true,
                status: 'El nombre debe tener al menos un caracter',
            })
            return;
        }
        this.setState({
            field_name:'',
            isSaving: true,
        });
        
        let data= new FormData()
        data.append('name',name);
        data.append('body_id',this.getIDfromIndex(this.state.body));
        data.append('head_id',this.getIDfromIndex(this.state.head));
        data.append('upperbody_id',this.getIDfromIndex(this.state.upperbody));
        data.append('lowerbody_id',this.getIDfromIndex(this.state.lowerbody));
        data.append('extra_id',this.getIDfromIndex(this.state.extra))

        if(this.props.mode == 'edit'){
            data.append("_method", 'PATCH');
            let url='api/avatars/'+this.props.avatar.id;
            this.fetchAvatar('POST',url,data);
        }
        else{
            this.fetchAvatar('POST','api/avatars',data);
        }
    }

    handleButtonBody = (e) =>{
        this.setState({
            currentItem: 'body',
            max_items: this.props.items.bodyitems.length,
        });
    }

    handleButtonExtra = (e) =>{
        this.setState({
            currentItem: 'extra',
            max_items: this.props.items.extraitems.length,
        });
    }

    handleButtonHead = (e) =>{
        this.setState({
            currentItem: 'head',
            max_items: this.props.items.headitems.length,
        });
    }

    handleButtonUpperbody = (e) =>{
        this.setState({
            currentItem: 'upperbody',
            max_items: this.props.items.upperbodyitems.length,
        });
    }

    handleButtonLowerbody = (e) =>{
        this.setState({
            currentItem: 'lowerbody',
            max_items: this.props.items.lowerbodyitems.length,
        });
    }

    handleButtonPrev = (e) =>{
        let index;
        let max = (this.state.max_items-1);
        switch(this.state.currentItem){
            case 'body':
                index=this.state.body;
                if (index==0)
                    index=max;
                else
                    index=index-1;
                this.setState({
                    body: index,
                });
                break;
            case 'head':
                index=this.state.head;
                if (index==0)
                    index=max;
                else
                    index=index-1;
                this.setState({
                    head: index,
                });
                break;
            case 'upperbody':
                index=this.state.upperbody;
                if (index==0)
                    index=max;
                else
                    index=index-1;
                this.setState({
                    upperbody: index,
                });
                break;
            case 'lowerbody':
                index=this.state.lowerbody;
                if (index==0)
                    index=max;
                else
                    index=index-1;
                this.setState({
                    lowerbody: index,
                });
                break;
            case 'extra':
                index=this.state.extra;
                if (index==0)
                    index=max;
                else
                    index=index-1;
                this.setState({
                    extra: index,
                });
                break;
        }
        //console.log("AVATAREDITOR: handleButtonPrev()");        
        //console.log(this.state.currentItem+": "+index);           
    }

    handleButtonNext = (e) =>{
        let index;
        let total = this.state.max_items;
        switch(this.state.currentItem){
            case 'body':
                index=this.state.body;
                index=(index+1)%total;
                this.setState({
                    body: index,
                });
                break;
            case 'head':
                index=this.state.head;
                index=(index+1)%total;
                this.setState({
                    head: index,
                });
                break;
            case 'upperbody':
                index=this.state.upperbody;
                index=(index+1)%total;
                this.setState({
                    upperbody: index,
                });
                break;
            case 'lowerbody':
                index=this.state.lowerbody;
                index=(index+1)%total;
                this.setState({
                    lowerbody: index,
                });
                break;
            case 'extra':
                index=this.state.extra;
                index=(index+1)%total;
                this.setState({
                    extra: index,
                });
                break;
        }
        //console.log("AVATAREDITOR: handleButtonNext()");        
        //console.log(this.state.currentItem+": "+index);        
    }

    isActive(button){
        if (button==this.state.currentItem){
            return ('active');
        }
        else{
            return null;
        }
    }
   
    buttonsAvatarItems(){
        return(
            <div className="btn-group-vertical btn-block" role="group" aria-label="avatar items buttons">
                <button type="button" className={"btn btn-secondary "+ this.isActive('body')}
                    onClick={this.handleButtonBody}>Cuerpo</button>
                <button type="button" className={"btn btn-secondary "+ this.isActive('head')}
                    onClick={this.handleButtonHead}>Cabeza</button>
                <button type="button" className={"btn btn-secondary "+ this.isActive('upperbody')}
                    onClick={this.handleButtonUpperbody}>Torso</button>
                <button type="button" className={"btn btn-secondary "+ this.isActive('lowerbody')}
                    onClick={this.handleButtonLowerbody}>Piernas</button>
                <button type="button" className={"btn btn-secondary "+ this.isActive('extra')}
                    onClick={this.handleButtonExtra}>Extra</button>
            </div>
        );
    }

    buttonsPrevNextItems(){
        return(
            <div className="btn-group btn-block " role="group" aria-label="avatar items previous and next buttons">
                <button type="button" className="btn btn-success "
                    onClick={this.handleButtonPrev}>◄</button>
                <button type="button" className="btn btn-success "
                    onClick={this.handleButtonNext}>►</button>
            </div>
        );
    }

    formSaveAvatar(){
        return(
            <div className="col-md-4">
                <div className="row justify-content-center ">
                    <div className="col-md-12">
                        <form onSubmit={this.handleSaveAvatar}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    onChange={this.handleFieldNameChange}
                                    value={this.state.field_name}
                                />
                            </div>
                            <div className="form-group ">
                                <button type="submit" className="btn btn-primary btn-block">
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="col-md-12">
                        <div className="errores ">
                            <Errors 
                                error={this.state.error}
                                message={this.state.status}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getAvatar(){
        let avatar = {
            'name': this.state.field_name,
            'body_id': this.state.body,
            'head_id': this.state.head,
            'upperbody_id': this.state.upperbody,
            'lowerbody_id': this.state.lowerbody,
            'extra_id': this.state.extra,
        };     
        return avatar;
    }

    renderApp(){
        if(!this.state.isSaving){
            return(
                <div className="row justify-content-center">                    
                        {this.formSaveAvatar()}
                    <div className="col-md-8">
                        <div className="row justify-content-center h-100">
                            <div className="col-md-4 my-auto">
                                <div className="botones-items-avatar">
                                    {this.buttonsAvatarItems()}
                                </div>
                            </div>
                            <div className="col-md-8 my-auto">
                                <div className="row justify-content-center">
                                    <div className="col-sm-8">
                                        {this.buttonsPrevNextItems()}
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="avatar-shower-frame"> 
                                        <AvatarShower 
                                            avatar={this.getAvatar()}
                                            items={this.props.items}                
                                            renderName={false}
                                            useIDs={false}                    
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            // Guardando
            return(
                <Loading/>
            );
        }
    }

    render(){
        return(
            this.renderApp()
        );
    }

}

export default AvatarEditor
