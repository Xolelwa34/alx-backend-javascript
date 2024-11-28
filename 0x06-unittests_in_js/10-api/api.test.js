describe('/available_payments', () => {
  it('returns the correct payment methods', (done) => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe('/login', () => {
  it('returns the correct message with userName', (done) => {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: { userName: 'Betty' },
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});

