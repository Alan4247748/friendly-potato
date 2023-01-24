
import React from 'react';
import Layout from '@theme/Layout'; 

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My First React Component</h1>
      <p>Well I have a lot to learn, but this is kind of coming together nicely!</p>
<div class="card-demo">
  <div class="card">
    <div class="card__header">
      <h3>Services</h3>
    </div>
    <div class="card__body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.
      </p>
    </div>
    <div class="card__footer">
      <button class="button button--secondary button--block">See All</button>
    </div>
  </div>
</div>
</Layout>
);

}
