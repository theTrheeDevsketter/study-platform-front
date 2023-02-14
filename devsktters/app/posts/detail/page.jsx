import Link from 'next/link'
import './style.css'




async function getData() {
  let res  = await fetch('http://localhost:8080/posts/')
  
  if (!res.ok) {
    throw 'upsi'
  }
  const data = await res.json()
  return data
  
}


export default async function PostDetail() {

  let data = await getData()

  if (data) {
  }
  

  return (
    
    <div className="max-w-screen-xl mx-auto">
        
        
    
        <main className="mt-10">
    
          <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{height:'24em'}}>
            <div className="absolute left-0 bottom-0 w-full h-full z-10 elquefalta"></div>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2092%2F1*auQuyyb6aV5HMiGpoJGZkQ.gif&f=1&nofb=1&ipt=af428c61d615477cbe7f6294ba7d5d40489a275122e3e133e43174b703b61b5d&ipo=images" className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
            <div className="p-4 absolute  z-20">
                {
                    ['css','js','html'].map((tag, i)=> <p key={tag+i} className="ml-5 px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{tag}</p>)
                }
              
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                Titulo del post
              </h2>
              <div className="flex mt-3">
                <img src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover" />
                <div>
                  <p className="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
                  <p className="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </div>
    
          <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <p className="pb-6">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
              justice. Six draw
              you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
              resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was
              outlived peculiar rendered led six.</p>
    
            <p className="pb-6">Difficulty on insensible reasonable in. From as went he they. Preference themselves me as
              thoroughly
              partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or
              attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion
              expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting
              uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening
              newspaper in advantage frankness to concluded unwilling.</p>
    
            <p className="pb-6">Adieus except say barton put feebly favour him. Entreaties unpleasant sufficient few pianoforte
              discovered
              uncommonly ask. Morning cousins amongst in mr weather do neither. Warmth object matter course active law
              spring six. Pursuit showing tedious unknown winding see had man add. And park eyes too more him. Simple excuse
              active had son wholly coming number add. Though all excuse ladies rather regard assure yet. If feelings so
              prospect no as raptures quitting.</p>
    
            <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
              Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
              expression
              unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.
              Steepest speaking up attended it as. Made neat an on be gave show snug tore.
            </div>
    
            <p className="pb-6">Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me
              everything.
              Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage
              is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry
              among. Delightful remarkably new assistance saw literature mrs favourable.</p>
    
            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Uneasy barton seeing remark happen his has</h2>
    
            <p className="pb-6">Guest it he tears aware as. Make my no cold of need. He been past in by my hard. Warmly thrown
              oh he common
              future. Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested
              simplicity at do projecting increasing terminated. As edward settle limits at in.</p>
    
            <p className="pb-6">Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh.
              Hundred no
              prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced
              ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who
              connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding
              ask expense are compact. New all paid few hard pure she.</p>
    
            <p className="pb-6">Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at
              tastes really
              so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited
              elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By
              in cold no less been sent hard hill.</p>
    
            <p className="pb-6">Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and
              make two real
              miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient
              to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it
              without me.</p>
    
          </div>
          <br />
        </main>
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
          <Link href=''>
            <div className="absolute inset-0 w-3 bg-indigo-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">Volver  😎</span>
          </Link>
        </button>
      </div>
  )
}