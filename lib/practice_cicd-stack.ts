import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as ec2 from 'aws-cdk-lib/aws-ec2';
import {
  RemovalPolicy,
  aws_s3 as S3,
} from 'aws-cdk-lib';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PracticeCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new S3.Bucket(this, 'cicdbucket', {
      bucketName: 'cicdbucket',
      blockPublicAccess: S3.BlockPublicAccess.BLOCK_ALL,
      publicReadAccess: false,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // const vpc = new ec2.Vpc(this, 'CICDVPC', {
    //   maxAzs: 2,
    // });

    // const instance = new ec2.Instance(this, 'CICDInstance', {
    //   vpc,
    //   instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
    //   machineImage: ec2.MachineImage.latestAmazonLinux2()
    // });
  }
}
