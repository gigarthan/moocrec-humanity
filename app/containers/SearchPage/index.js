import React, { Component } from 'react';

export default class SearchPage extends Component {
  render() {
    return (
      <section className="container mx-auto">
        <div className="flex flex-wrap p-4">
          <div className="w-full">
            <div>
              <input
                className="w-full p-4 rounded-full border"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="w-full mt-8 flex flex-wrap">
            <div className="w-1/5">
              <div className="border rounded p-2 h-full">
                <div className="m-2">
                  <h3 className="font-bold">Lecturer Accent</h3>
                  <ul>
                    <li>English - UK</li>
                    <li>English - US</li>
                  </ul>
                </div>
                <div className="m-2">
                  <h3 className="font-bold">Lecturer Accent</h3>
                  <ul>
                    <li>English - UK</li>
                    <li>English - US</li>
                  </ul>
                </div>
                <div className="m-2">
                  <h3 className="font-bold">Lecturer Accent</h3>
                  <ul>
                    <li>English - UK</li>
                    <li>English - US</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-4/5">results</div>
          </div>
        </div>
      </section>
    );
  }
}
