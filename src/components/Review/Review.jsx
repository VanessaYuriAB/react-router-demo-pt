import './Review.css';
import { useNavigate, useParams } from 'react-router-dom';

function Review({ reviews }) {
  const history = useNavigate();

  const params = useParams();
  let id = params.reviewId;
  id = id - 1; // Ajusta o ID para corresponder ao índice do array - para acessarmos os itens corretos. Isso é necessário porque os índices do array começam com 0, enquanto os IDs da API começam em 1.

  return (
    <div className="review">
      {reviews && (
        <div className="review__item">
          <h3>{reviews[id]?.title}</h3>
          <p>{reviews[id]?.text}</p>
          <p className="review__rating">
            Avaliação final:{reviews[id]?.rating}/5
          </p>
          {/* Hook de navegação. */}
          <button type="button" onClick={() => history('/reviews')}>
            Volte para a lista de avaliações
          </button>
        </div>
      )}
    </div>
  );
}

export default Review;
