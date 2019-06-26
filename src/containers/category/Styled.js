import styled from 'styled-components';

export const CategoryStyled = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    -moz-box-shadow: 1px 2px 3px rgba(0, 0, 0,0.12);
    -webkit-box-shadow: 1px 2px 3px rgba(0, 0, 0, .12);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, .12);
    margin-bottom: 0.5rem;
    padding: 0.5rem;

    p {
        margin: 0;
    }
`;

export const PictureWithRateStyled = styled.div`
    text-align: center;
    width: 80px;
    min-width: 80px;

    img {
        width: 80px;
    }

    .stars-outer {
        position: relative;
        display: inline-block;
        max-width: 100%;
    }

    .stars-outer::before {
        @media (min-width: 480px) {
            font-size: 0.8rem;
        }

        content: "\f005 \f005 \f005 \f005 \f005";
        font-family: 'Font Awesome 5 Free';
        font-weight: 600;
        font-size: 0.6rem;
        color: #ccc;
    }

    .stars-inner {
        position: absolute;
        top: 0;
        left: 0;
        white-space: nowrap;
        width: 0;
        overflow: hidden;
    }

    .stars-inner::before {
        @media (min-width: 480px) {
            font-size: 0.8rem;
        }

        content: "\f005 \f005 \f005 \f005 \f005";
        font-family: 'Font Awesome 5 Free';
        font-weight: 600;
        font-size: 0.6rem;
        color: #f8ce0b;
    }

`;


export const DetailStyled = styled.div`
    @media (min-width: 769px) {
        padding-right: 1rem;
    }

    padding: 0.8rem 0rem 0.8rem 1rem;

    >:nth-child(1) {
        @media (min-width: 480px) {
            margin-bottom: 0.3rem;
        }

        font-weight: 600;
        margin-top: 0;
        margin-bottom: 2.6rem;
    }

    >:nth-child(2)  {
        @media (min-width: 480px) {
            display: block;
            color: #777;
            margin-bottom: 0.3rem;
            font-size: 0.9rem;
        }

        display: none;
    }

    >:nth-child(3) {
        display: flex;

        span:nth-child(1) {
            @media (min-width: 480px) {
                margin-right: 3rem;
                order: 1;
            }

            margin-right: 1rem;
            order: 2;
        }
        span:nth-child(2) {
            @media (min-width: 480px) {
                order: 2;
            }

            margin-right: 1rem;
            order: 1;
        }
    }
`;

export const ComparePriceStyled = styled.div`
    @media (min-width: 480px) {
            display: block;
    }

    display: none;
    padding: 0.8rem 1rem 0.8rem 1rem;

    a {
        @media (min-width: 480px) {
            font-size: 0.9rem;
        }
        text-decoration: none;
        font-size: 0.7rem;
        padding: 0.5rem 0.8rem;
        background-color: #2d91e2;
        border-radius: 0.2em;
        box-sizing: border-box;
        color: #fff;
        transition: 0.3s;
        box-shadow:inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
    }

    a:hover {
        background-color: #4dabf6;
    }
`;