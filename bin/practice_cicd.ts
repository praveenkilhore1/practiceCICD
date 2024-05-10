#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PracticeCicdStack } from '../lib/practice_cicd-stack';

const app = new cdk.App();
new PracticeCicdStack(app, 'PracticeCicdStack', {
});