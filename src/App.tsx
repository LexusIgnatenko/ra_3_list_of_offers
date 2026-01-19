import './App.css';
import etsy from './etsy.json';
import Listing from './Listing';

function App() {
  const items = etsy.filter(item => item.state === 'active').map(item => ({
    listingId: item.listing_id,
    url: item.url ?? '',
    mainImage: { url570xN: item.MainImage?.url_570xN ?? '' },
    title: item.title ?? '',
    currencyCode: item.currency_code ?? '',
    price: item.price ?? '',
    quantity: item.quantity ?? 1,
  }));
  return (
    <div className='container'>
      <Listing items={items} />
    </div>
  );
}

export default App;