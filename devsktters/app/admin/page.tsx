'use client'

import { Posti } from "../../src/interfaces";
import ListPostAdmin from "./components/ListPostAdmin";

export default function Admin(){
    // TODO componente que con una lista de post nos cree una lista de post
    // un componente que con los datos de un post nos deje ver el post 
    // 2 botones uno para validar el post y otro para borrarlo

    const mockPost : Posti = {
        author:'idy',
        avatarImg : 'https://imgs.search.brave.com/7X-HkI9iRTajSDmBdltC7KttnoThkq1yFKbfu9WPFhM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvNm43eHJx/cHVsdzYyMS5wbmc',
        content : '<h1>kdfkljhaklsdhflkjahsd</h1>',
        date :'asdfasdf',
        id: 'dskfhlakjhf',
        isPosted: false,
        likes : 989,
        tags : ['asdf','asdfasdf'],
        title : 'Soy una Warri chaser'
    }
    

    return <ListPostAdmin />
}