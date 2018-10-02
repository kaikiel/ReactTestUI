export default (state='', action) => {

    

    switch(action.type){
        case 'Login':
            return 'kiel';
        case 'Logout':
            return '';
        default:
            return 'default';

    

    }


}