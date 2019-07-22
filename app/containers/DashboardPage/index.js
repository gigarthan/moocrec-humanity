import React, { Component } from 'react';

export default class DashboardPage extends Component {
  render() {
    return (
      <section className="m-4">
        <div className="flex flex-wrap">
          <div className="w-4/5">
            <div className="flex flex-wrap">
              <div className="w-full p-4">
                <div>
                  <h1 className="text-lg">Recommended Courses</h1>
                </div>
                <div>
                  <div className=" flex flex-no-wrap py-2  overflow-x-auto overflow-y-hidden">
                    {[1, 1, 1, 1, 1, 1, 1].map(() => (
                      <div
                        style={{ width: '200px', height: '300px' }}
                        className="bg-white border rounded flex-shrink-0 mx-1 p-4"
                      >
                        <h3 className="text-center">World War II</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full p-4">
                <div>
                  <h1 className="text-lg">Recently searched courses</h1>
                </div>
                <div>
                  <div className=" flex flex-no-wrap py-2  overflow-x-auto overflow-y-hidden">
                    {[1, 1, 1, 1, 1, 1, 1].map(() => (
                      <div
                        style={{ width: '200px', height: '300px' }}
                        className="bg-white border rounded flex-shrink-0 mx-1 p-4"
                      >
                        <h3 className="text-center">Big History</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/5 p-4">
          <div>
                <h1 className="text-lg invisible">Profile</h1>
              </div>
            <div className="p-4 my-2 border border-solid rounded flex flex-wrap">
              
              <div className="w-full">
                <img
                  className="m-auto w-40 rounded-full"
                  src="https://www.w3schools.com/howto/img_avatar.png"
                />
              </div>
              <div className="w-full my-2 text-center">
                <h4 className="text-lg">Fazlan</h4>
                <h3 className="font-bold">Visual Learner</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
