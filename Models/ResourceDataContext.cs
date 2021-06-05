using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;

namespace TestTaskBrokereeSolutions.Models
{
    public class ResourceDataContext
    {
        private static ObservableCollection<Resource> resourceList;
        static ResourceDataContext()
        {
            resourceList = new ObservableCollection<Resource>()
            {
                new Resource{Id=1, Name="foo"},
                new Resource{Id=2, Name="bar"},
                new Resource{Id=3, Name="baz"},
                new Resource{Id=4, Name="test"},
            };
        }

        public IEnumerable<Resource> GetResources() => resourceList;
        public Resource GetResourceFromId(int id) => resourceList.FirstOrDefault(val => id == val.Id);
        public void SaveResource(Resource resource) => resourceList.Add(resource);
        public void DeleteResource(int id) => resourceList.Remove(resourceList.FirstOrDefault(val => id == val.Id));
        public void UpdateResource(Resource resource)
        {
            var result = resourceList.FirstOrDefault(val => resource.Id == val.Id);
            if (result != null)
            {
                result.Name = resource.Name;
            }
        }

    }
}
