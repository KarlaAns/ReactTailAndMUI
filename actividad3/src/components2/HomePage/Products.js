import ClothingCard from './ClothingCard';
import one from '../../assets/md-salman-tWOz2_EK5EQ-unsplash.jpg';
import two from '../../assets/alex-haigh-fEt6Wd4t4j0-unsplash.jpg';
import three from '../../assets/justin-buisson-JU5_bUxr5Rg-unsplash.jpg';
import four from '../../assets/ns-37rVmK3jY-c-unsplash.jpg';
import five from '../../assets/milada-vigerova-p8Drpg_duLw-unsplash.jpg';
import six from '../../assets/brandon-webb-GNPCqlUex8U-unsplash.jpg';

function Products() {
    return (
        <main>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Products.{' '}

                </div>
            </div>
            <div class="flex space-x-2">
                <ClothingCard imageSrc={one} name={"Shirt"} price={20.00} description={"Very cool shirt"} />,
                <ClothingCard imageSrc={two} name={"Better shirt"} price={18.00} description={"Very cool shirt"} />,
            </div>
            <div class="flex space-x-2">
                <ClothingCard imageSrc={three} name={"Sweeter"} price={25.00} description={"Very cool sweeter"} />,
                <ClothingCard imageSrc={four} name={"Mint colored Hoodie"} price={70.00} description={"So you keep it fresh"} />,
            </div>
            <div class="flex space-x-2">
                <ClothingCard imageSrc={five} name={"Weird shaped hoodie"} price={10.00} description={"To keep it warm"} />,
                <ClothingCard imageSrc={six} name={"Really cool hoodie"} price={90.00} description={"Just because hoodies are better"} />,
            </div>
        </main>
    );
}
export default Products;