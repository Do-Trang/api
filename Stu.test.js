const {
    listStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
  } = require('./src/controllers/studentController');
  
  const Student = require('./src/models/student');
  jest.mock('./src/models/student');
  
  describe('Student Controller APIs', () => {
    const mockStudents = [
      { _id: '1', name: 'test1', gender: 'Female', university: 'UET' },
      { _id: '2', name: 'test2', gender: 'Male', university: 'HUST' }
    ];
    const mockReq = { params: { id: '1' }, body: { name: 'New Student', gender: 'Male', university: 'ITMO' } };
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    describe('listStudents API', () => {
      it('should return list of students', async () => {
          Student.find.mockResolvedValue(mockStudents);
          await listStudents(mockReq, mockRes);
          expect(mockRes.json).toHaveBeenCalledWith(mockStudents);
      });
  });
  
  
    describe('getStudent API', () => {
      it('should return a single student by ID', async () => {
        const studentId = '1';
        const mockStudent = mockStudents[0];
        Student.findById.mockResolvedValue(mockStudent);
  
        mockReq.params.id = studentId;
  
        await getStudent(mockReq, mockRes);
  
        expect(mockRes.json).toHaveBeenCalledWith(mockStudent);
      });
  
      it('should return 404 if student not found', async () => {
        Student.findById.mockResolvedValue(null);
  
        await getStudent(mockReq, mockRes);
  
        expect(mockRes.status).toHaveBeenCalledWith(404);
        expect(mockRes.send).toHaveBeenCalledWith('Student not found');
      });
    });
  
    describe('createStudent API', () => {
        it('should create a new student', async () => {
            const mockStudent = new Student(mockReq.body);
            mockStudent.save.mockResolvedValue();

            await createStudent(mockReq, mockRes);

            expect(mockStudent.save).toHaveBeenCalled();
        });
      });
      
  
    describe('updateStudent API', () => {
      it('should update an existing student by ID', async () => {
        const studentId = '1';
        const updatedData = { name: 'Updated Student', gender: 'Female', university: 'Updated University' };
        const updatedStudent = { _id: studentId, ...updatedData };
        Student.findByIdAndUpdate.mockResolvedValue(updatedStudent);
  
        mockReq.params.id = studentId;
        mockReq.body = updatedData;
  
        await updateStudent(mockReq, mockRes);
  
        expect(Student.findByIdAndUpdate).toHaveBeenCalledWith(studentId, updatedData, { new: true });
        expect(mockRes.json).toHaveBeenCalledWith(updatedStudent);
      });
  
      it('should return 404 if student not found', async () => {
        Student.findByIdAndUpdate.mockResolvedValue(null);
  
        await updateStudent(mockReq, mockRes);
  
        expect(mockRes.status).toHaveBeenCalledWith(404);
        expect(mockRes.send).toHaveBeenCalledWith('Student not found');
      });
    });
  
    describe('deleteStudent API', () => {
      it('should delete a student by ID', async () => {
        const studentId = '1';
        Student.findByIdAndDelete.mockResolvedValue({ _id: studentId }); 
    
        mockReq.params.id = studentId;
    
        await deleteStudent(mockReq, mockRes);
    
        expect(mockRes.status).toHaveBeenCalledWith(204);
         expect(mockRes.send).toHaveBeenCalledWith(); 
    });
  
      it('should return 404 if student not found', async () => {
        Student.findByIdAndDelete.mockResolvedValue(null);
  
        await deleteStudent(mockReq, mockRes);
  
        expect(mockRes.status).toHaveBeenCalledWith(404);
        expect(mockRes.send).toHaveBeenCalledWith('Student not found');
      });
    });
  });