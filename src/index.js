import { createServer } from 'http';
import express from 'express';
import config from 'config'
import mysql from 'mysql';
import { graphqlExpress} from 'apollo-server-express';
import bodyParser from 'body-parser';
import kue from 'kue'

//import Ali from '../std-util/lib/util/'
import {tip} from '../../std-util/lib/util/winston'

console.log('111')

export const abc=1234