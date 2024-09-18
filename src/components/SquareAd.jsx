import { useEffect } from 'react';

const SquareAd = () => {
    useEffect(() => {
        // Ensure the adsbygoogle object is available
            try {
                // Push an empty object to trigger AdSense ad display
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (error) {
                console.error('AdSense error: ', error);
            }
    
    }, []);

    return (
        <div>
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-8092423316545618"
                data-ad-slot="5623433826"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    );
};

export default SquareAd;
