describe('main.js', function() {
    describe('calculate()', function() {
        it('validates expression when the first number is invalid', function() {
            spyOn(window, 'updateResult').and.stub();
            calculate('a+3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not reconigzed');
        });
      
        it('should return 6 when called with 3+3', function() {
            spyOn(window, 'updateResult').and.stub();
            calculate('3+3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(6);
        });
      
        it('calls updatedResults (example using and.callFake)', function () {
            spyOn(window, 'updateResult');
//             spyOn(Calculator.prototype, 'multiply').and.callFake(function() {
//               return 'it works';
//             });
            spyOn(Calculator.prototype, 'multiply').and.callFake(function() {
              return 9;
            });

            calculate('3*3');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(9);
        });
          
          
//         it('validates expression when the second number is invalid', function() {
//             spyOn(window, 'updateResult').and.returnValue(10); // Stub is the default and can be omitted. 
//             calculate('3+a');
//             expect(window.updateResult).toHaveBeenCalled();
//             expect(window.updateResult).toHaveBeenCalledWith('Expression not reconigzed');
//         });
//         it('validates expression when operation is invalid', function() {
//             spyOn(window, 'updateResult')
//             calculate('3_4');
//             expect(window.updateResult).toHaveBeenCalled();
//             expect(window.updateResult).toHaveBeenCalledWith('Expression not reconigzed');
//         });
//         it('uses test properties when operation is valid', function() {
//           spyOn(window, 'updateResult');
//           calculate('3+4');
//           expect(window.updateResult).toHaveBeenCalled();
//         });
      
      
    });
});

// describe('main.js', function() {
//     describe('calculate()', function() {
//         it('validates expression when the first number is invalid', function() {
//             spyOn(window, 'updateResult').and.stub();
//             calculate('a+3');
//             expect(window.updateResult).toHaveBeenCalled();
//             expect(window.updateResult).toHaveBeenCalledWith('Expression not reconigzed');
//         });
//         it('validates expression when the second number is invalid', function() {
//             spyOn(window, 'updateResult').and.returnValue(10); // Stub is the default and can be omitted. 
//             calculate('3+a');
//             expect(window.updateResult).toHaveBeenCalled();
//             expect(window.updateResult).toHaveBeenCalledWith('Expression not reconigzed');
//         });
//         it('validates expression when operation is invalid', function() {
//             spyOn(window, 'updateResult')
//             calculate('3_4');
//             expect(window.updateResult).toHaveBeenCalled();
//             expect(window.updateResult).toHaveBeenCalledWith('Expression not reconigzed');
//         });
//         it('uses test properties when operation is valid', function() {
//           spyOn(window, 'updateResult');
//           calculate('3+4');
//           expect(window.updateResult).toHaveBeenCalled();
//         });
//       // debugger;
      
//       // it('calls updatedResults (example using and.callFake)', function () {
// //       spy(window, 'updateResult');
// //       spyOn(Calculator.prototype, 'multiply').add.callFake(function(number) {
// //         return 'it works';
// //       })
// //     })
      
// //         xit('calls add');
// //         xit('calls subtract');
// //         xit('calls multiple');
// //         xit('calls divide');
// //         xit('validations operation');
// //         xit('calls updateResult');
//     });
// });