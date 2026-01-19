interface ListingItemProps {
  listingId: number,
  url: string,
  mainImage: { url570xN: string },
  title: string,
  currencyCode: string,
  price: string,
  quantity: number
}

const modifyTitle = (title: string) => {
  if (title.length > 50) {
    const result = /\S.{1,49}(?=$|\s)/.exec(title);
    if (result) return result[0] + '…';
  }
  return title;
};

const formatPrice = (currencyCode: string, price: string) => {
  if (currencyCode === 'USD') return '$' + price;
  if (currencyCode === 'EUR') return '€' + price;
  return price + ' ' + currencyCode;
};

const convertQuantityToClassName = (quantity: number) => {
  if (quantity <= 10) return 'item-quantity level-low';
  if (quantity <= 20) return 'item-quantity level-medium';
  return 'item-quantity level-high';
};

function Listing({ items = [] }: { items: ListingItemProps[] }) {
  const listingItems = items.map(item => (
    <div className='item' key={ item.listingId }>
      <div className='item-image'>
        <a href={ item.url }>
          <img src={ item.mainImage.url570xN } alt={ modifyTitle(item.title) } />
        </a>
      </div>
      <div className='item-details'>
        <p className='item-title'>{ modifyTitle(item.title) }</p>
        <p className='item-price'>{ formatPrice(item.currencyCode, item.price) }</p>
        <p className={ convertQuantityToClassName(item.quantity) }>{ item.quantity } left</p>
      </div>
    </div>
  ));
  return <div className='item-list'>{ listingItems }</div>;
}

export default Listing;