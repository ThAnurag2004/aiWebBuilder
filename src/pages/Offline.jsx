import offlineImage from '../../public/ofimg.png';

function Offline() {
  return (
    <div className="flex h-screen w-full flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-purple-900 text-white">
        <img src={offlineImage} className='w-100' />
        <h1 className="text-5xl font-bold">No Internet</h1>
    </div>
  );
}

export default Offline;


