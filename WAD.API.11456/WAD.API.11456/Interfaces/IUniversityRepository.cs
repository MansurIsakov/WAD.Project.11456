using System.Collections.Generic;
using WAD.API._11456.Models;

namespace WAD.API._11456.Interfaces
{
    public interface IUniversityRepository
    {
        void InsertUniversity(University university);
        void UpdateUniversity(University university);
        void DeleteUniversity(int universityId);
        University GetUniversityById(int universityId);
        IEnumerable<University> GetAllUniversities();
        IEnumerable<object> GetUniversitiesShortNames();
    }
}