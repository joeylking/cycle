import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import Timer from '../Timer/Timer';

const GiftList = ({ user, gifts, editInterested, setGift, filterGifts }) => {
  const active = gifts.filter(g => g.active === true);
  const filtered = active.filter(g => g.giver.id !== user.id);

  const interestedClick = gift => {
    if (gift.interested_users.includes(user.id)) {
      let arr = gift.interested_users.filter(iUser => iUser !== user.id);
      gift.interested_users = arr;
      editInterested(gift);
    } else {
      gift.interested_users.push(user.id);
      editInterested(gift);
    }
  };

  const handleClick = gift => {
    setGift(gift);
  };

  const now = new Date();

  return (
    <Container>
      <Search gifts={gifts} filterGifts={filterGifts} />
      <Row
        md={4}
        className='justify-content-center d-flex flex-wrap align-items-center mt-3 g-4'
      >
        {filtered.map(gift => {
          let expiration = new Date(
            new Date(gift.created).getTime() +
              gift.hours_active * 60 * 60 * 1000
          );
          return (
            <Col key={gift.id}>
              <Card
                className='text-centered shadow border-0'
                style={{ width: '17rem', height: '25rem' }}
              >
                <Card.Img
                  variant='top'
                  src={`http://127.0.0.1:8000${gift.image}`}
                  style={{ height: '14rem' }}
                />
                <Card.Body>
                  <Card.Title>{gift.name}</Card.Title>
                  <Card.Text style={{ height: '4rem' }}>
                    Condition: {gift.condition} <br />
                    Time left: <Timer endDate={expiration} />
                  </Card.Text>
                  <div className='text-center'>
                    <Link
                      to='/Detail'
                      className='btn btn-primary'
                      onClick={() => handleClick(gift)}
                    >
                      Details
                    </Link>{' '}
                    {gift.interested_users.includes(user.id) ? (
                      <Button
                        variant='outline-primary'
                        onClick={() => interestedClick(gift)}
                      >
                        Not Interested
                      </Button>
                    ) : (
                      <Button
                        variant='primary'
                        onClick={() => interestedClick(gift)}
                      >
                        Interested
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default GiftList;
