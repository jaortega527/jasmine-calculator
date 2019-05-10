describe('main.js', function() {
    describe('calculate()', function() {
        it('validates expression when the first number is invalid', function() {
            spyOn(window, 'updateResult').and.stub();
            calculate('a+3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not reconigzed');
        });
        it('validates expression when the second number is invalid', function() {
            spyOn(window, 'updateResult') // Stub is the default and can be omitted. 
            calculate('3+a');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not reconigzed');
        });
        it('validates expression when operation is invalid', function() {
            spyOn(window, 'updateResult')
            calculate('3_4');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not reconigzed');
        });
        xit('calls add');
        xit('calls subtract');
        xit('calls multiple');
        xit('calls divide');
        xit('validations operation');
        xit('calls updateResult');
    });
});