export default class ImageService{

    /*getCaseImage(id){

        let image;

        switch(id){
            case 1: {image=require('./images/iPhone7-8/iPhone7-8.png'); break;}
            case 2: {image=require('./images/IphoneX.png'); break;}
            case 3: {image=require('./images/iPhoneXR.png'); break;}
            case 4: {image=require('./images/SamsungS8.png'); break;}
            case 5: {image=require('./images/samsungS9plus.png'); break;}
            case 6: {image=require('./images/iPhone7-8-coral.png'); break;}
        }

        return image;
    }*/

    getColorCase(caseId, colorId){

        let image;

        if(caseId==1){ //Id 1 corresponde a iPhone 7-8
            switch(colorId){
                case 0: {image=require('./images/iPhone7-8/iPhone7-8.png'); break;}
                case 1: {image=require('./images/iPhone7-8/iPhone7-8-coral.png'); break;}
                case 2: {image=require('./images/iPhone7-8/iPhone7-8-amarillo.png'); break;}
                case 3: {image=require('./images/iPhone7-8/iPhone7-8-verde.png'); break;}
                case 4: {image=require('./images/iPhone7-8/iPhone7-8-teal.png'); break;}
                case 5: {image=require('./images/iPhone7-8/iPhone7-8-blue.png'); break;}
                case 6: {image=require('./images/iPhone7-8/iPhone7-8-indigo.png'); break;}
                
                default: {image=require('./images/iPhone7-8/iPhone7-8.png'); break;}
            }
        }
        if(caseId==2){ //Id 2 corresponde a iPhone X
            switch(colorId){
                case 0: {image=require('./images/iPhoneX/IphoneX.png'); break;}
                case 1: {image=require('./images/iPhoneX/IphoneX-coral.png'); break;}
                case 2: {image=require('./images/iPhoneX/IphoneX-amarillo.png'); break;}
                case 3: {image=require('./images/iPhoneX/IphoneX-verde.png'); break;}
                case 4: {image=require('./images/iPhoneX/IphoneX-teal.png'); break;}
                case 5: {image=require('./images/iPhoneX/IphoneX-blue.png'); break;}
                case 6: {image=require('./images/iPhoneX/IphoneX-indigo.png'); break;}
               
                default:{image=require('./images/iPhoneX/IphoneX.png'); break;}
            }
        }

        if(caseId==3){ //Id 3 correspone a iPhone XR
            switch(colorId){
                case 0: {image=require('./images/iPhoneXR/iPhoneXR.png'); break;}
                case 1: {image=require('./images/iPhoneXR/iPhoneXR-coral.png'); break;}
                case 2: {image=require('./images/iPhoneXR/iPhoneXR-amarillo.png'); break;}
                case 3: {image=require('./images/iPhoneXR/iPhoneXR-verde.png'); break;}
                case 4: {image=require('./images/iPhoneXR/iPhoneXR-teal.png'); break;}
                case 5: {image=require('./images/iPhoneXR/iPhoneXR-blue.png'); break;}
                case 6: {image=require('./images/iPhoneXR/iPhoneXR-indigo.png'); break;}

                default:{image=require('./images/iPhoneXR/iPhoneXR-coral.png'); break;}
            }
        }

        if(caseId==4){ //Id 4 corresponde a SamsungS8
            switch(colorId){
                case 0: {image=require('./images/samsungS8/SamsungS8.png'); break;}
                case 1: {image=require('./images/samsungS8/SamsungS8-coral.png'); break;}
                case 2: {image=require('./images/samsungS8/SamsungS8-amarillo.png'); break;}
                case 3: {image=require('./images/samsungS8/SamsungS8-verde.png'); break;}
                case 4: {image=require('./images/samsungS8/SamsungS8-teal.png'); break;}
                case 5: {image=require('./images/samsungS8/SamsungS8-blue.png'); break;}
                case 6: {image=require('./images/samsungS8/SamsungS8-indigo.png'); break;} 

                default:{image=require('./images/samsungS8/SamsungS8-coral.png'); break;}
            }
        }

        if(caseId==5){ //Id 5 corresponde a Xiaomi F1
            switch(colorId){
                case 0: {image=require('./images/Xiaomi-F1/Xiaomi-F1.png'); break;}
                case 1: {image=require('./images/Xiaomi-F1/Xiaomi-F1-coral.png'); break;}
                case 2: {image=require('./images/Xiaomi-F1/Xiaomi-F1-amarillo.png'); break;}
                case 3: {image=require('./images/Xiaomi-F1/Xiaomi-F1-verde.png'); break;}
                case 4: {image=require('./images/Xiaomi-F1/Xiaomi-F1-teal.png'); break;}
                case 5: {image=require('./images/Xiaomi-F1/Xiaomi-F1-blue.png'); break;}
                case 6: {image=require('./images/Xiaomi-F1/Xiaomi-F1-indigo.png'); break;}
                
            }
        }
        
        return image;
    }

    getEstampa(estampaId){
        let image;

        switch(estampaId){
            case 0:{image=require('./images/estampas/sin-estampa.png'); break;}
            case 1:{image=require('./images/estampas/girl.png'); break;}
            case 2:{image=require('./images/estampas/cat.png'); break;}
            case 3:{image=require('./images/estampas/stitch.png'); break;}
            case 4:{image=require('./images/estampas/palmeras.png'); break;}
            case 5:{image=require('./images/estampas/cobra.png'); break;}
            case 6:{image=require('./images/estampas/elephant-mandala.png'); break;}
            case 7:{image=require('./images/estampas/minion.png'); break;}
            case 8:{image=require('./images/estampas/girl-poweer.png'); break;}
            case 9:{image=require('./images/estampas/abortolegal.png'); break;}
        }

        return image;
    }
}