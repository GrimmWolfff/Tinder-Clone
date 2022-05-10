import React from 'react'
import { getProviders, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function HomePage({ providers }){
    const router = useRouter();
    const { status } = useSession();
    React.useEffect(() => {
        if(status === 'authenticated') {
            router.push('/');
        }
    }, [status])
    return (
        <div className={status === 'authenticated' ? 'hidden' : 'flex flex-col'}>
            <div className="bg-[url('https://miro.medium.com/max/1650/1*Ymq9g7SILfFIW-Z_lP4bAQ.gif')] 
            h-screen w-full flex flex-col justify-around items-center h-screen bg-cover">
                <h1 className="text-3xl text-white font-bold">Welcome</h1>
                {providers && Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <div>
                            <button className="button" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                                Sign in
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default HomePage;

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return { props: { providers } }
}