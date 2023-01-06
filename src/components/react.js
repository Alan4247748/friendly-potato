import react from 'react'
import stylescss from './styles.module.css';

<div class="card-demo">
  <div class="card">
    <div class="card__header">
      <h3>Lorem Ipsum</h3>
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

/** equal widith
 */

<div class="container">
  <div class="row">
    <div class="col">
      <div class="col-demo">col</div>
    </div>
    <div class="col">
      <div class="col-demo">col</div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="col-demo">col</div>
    </div>
    <div class="col">
      <div class="col-demo">col</div>
    </div>
    <div class="col">
      <div class="col-demo">col</div>
    </div>
  </div>
</div>

/** (navbar dark mode) Mostly for search function
*/ 

<nav class="navbar navbar--dark">
  <div class="navbar__inner">
    <div class="navbar__items">
      <a class="navbar__brand">Infima</a>
      <div class="navbar__item dropdown dropdown--hoverable">
        <a class="navbar__item navbar__link" href="#url">v2.0</a>
        <ul class="dropdown__menu">
          <li>
            <a class="dropdown__link" href="#url">v1.8.0</a>
          </li>
          <li>
            <a class="dropdown__link" href="#url">v1.7.0</a>
          </li>
          <li>
            <a class="dropdown__link" href="#url">v1.6.0</a>
          </li>
          <li>
            <a class="dropdown__link" href="#url">All Versions</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar__items navbar__items--right">
      <a class="navbar__item navbar__link" href="#url">Docs</a>
      <a class="navbar__item navbar__link" href="#url">Tutorial</a>
      <form>
        <div class="navbar__search">
          <input class="navbar__search-input" placeholder="Search" />
        </div>
      </form>
    </div>
  </div>
</nav>