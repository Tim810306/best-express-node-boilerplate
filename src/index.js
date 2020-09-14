import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';

import models, { sequelize } from './models';
import routes from './routes';

const app = express();

// Application-Level Middleware

app.use(cors());

app.use(cors());
app.use(express.json());
app.use(compression());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());

if(app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled...');
}

//definite custom middleware
app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('rwieruch'),
  };
  next();
});

// Routes

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

// Start

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createUsersWithMessages();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

const createUsersWithMessages = async () => {
  await models.User.create(
    {
      username: 'TimCheng',
      messages: [
        {
          text: 'FullStacks Engineer',
        },
      ],
    },
    {
      include: [models.Message],
    },
  );

  await models.User.create(
    {
      username: 'Cheng Yu-Ting',
      messages: [
        {
          text: 'Happy Coding~~~',
        },
        {
          text: 'Have fun~,
        },
      ],
    },
    {
      include: [models.Message],
    },
  );
};
