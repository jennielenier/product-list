import React, { Component } from 'react';
import { getCategoryList } from './state/category';
import { CategoryStyled, DetailStyled, ComparePriceStyled, PictureWithRateStyled } from './Styled';

export default class Category extends Component {
  state = { category: {} };
  componentDidMount() {
    const loadedData = getCategoryList();

    this.setState({ category: loadedData });
  }

  render() {
    const { category } = this.state;
    if (!category.products) {
      return <div>Loading...</div>
    }
    return category.products.map((product) => {
      const starTotal = 5;
      const rating = product.rating && product.rating.averageRating;
      const starPercentage = (rating / starTotal) * 100;
      const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
      const imageLink = "http://medlogotyp.se//phone/1653696315/Samsung-Galaxy-S8-64GB.jpg";
      return <CategoryStyled key={product.id} className={product.id}>
                  <PictureWithRateStyled>
                    <img src={imageLink} alt={product.name} />
                    <div className="stars-outer">
                      <div className="stars-inner" style={{ width: starPercentageRounded }}></div>
                    </div>
                  </PictureWithRateStyled>
                  <DetailStyled>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>
                      <span>{product.numberOfMerchants}&nbsp;butiker</span>
                      <span>fr.&nbsp;<b>{product.cheapestPrice.amount << 0}</b>&nbsp;kr</span>
                    </p>
                  </DetailStyled>
                  <ComparePriceStyled>
                    <a href="#!">Jamför&nbsp;Pris</a>
                  </ComparePriceStyled>
          </CategoryStyled>
    })
  }
}
