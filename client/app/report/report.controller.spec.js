'use strict';

describe('Component: ReportComponent', function () {

  // load the controller's module
  beforeEach(module('footstepsApp'));

  var ReportComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ReportComponent = $componentController('report', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
